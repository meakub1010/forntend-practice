// A functional "Observable" factory. It receives a producer function (subscriberFn)
// that knows how to emit values/errors/completion into a given subscriber.
function Observable(subscriberFn){
    return {
        // Consumers call .subscribe(observer) to start the stream.
        subscribe(observer) {
            // Tracks whether the subscription has been cancelled.
            let isUnsubscribed = false;

            // Normalize the observer so all handlers exist (no-ops by default).
            const safeObserver = {
                next:    observer.next    || (() => {}),
                error:   observer.error   || (() => {}),
                complete:observer.complete|| (() => {})
            };

            // This is the "guarded" subscriber we pass to the producer.
            // It forwards events to the observer only if still subscribed.
            const subscriber = {
                next: (val) => {
                    if(!isUnsubscribed) safeObserver.next(val);       // deliver value
                },
                error: (err) => {
                    if(!isUnsubscribed){
                        safeObserver.error(err);                       // deliver error
                        isUnsubscribed = true;                         // stop further events after error
                    }
                },
                complete: () => {
                    if(!isUnsubscribed){
                        safeObserver.complete();                       // deliver completion
                        isUnsubscribed = true;                         // stop further events after complete
                    }
                }
            };

            // Start producing events. The producer receives the guarded subscriber.
            // It may emit synchronously and/or schedule async emissions.
            subscriberFn(subscriber);

            // Return the Subscription object with an unsubscribe() method.
            return {
                unsubscribe() {
                    isUnsubscribed = true;                             // flip the guard so future events are ignored
                }
            }
        }
    }
}

// ----- Example usage -----

// Define an observer with callbacks. (BUG NOTE below.)
const observer = {
    next: (value) => console.log('got a value', value),
    error: (err) => console.log('we got error', err),
    complete: () => console.log('no more data')
};

// Create an observable (the producer logic).
// It emits 1 and 2 synchronously, then 3 and 4 after 100ms.
const myObservable = Observable((subscriber) => {
    subscriber.next(1);                 // synchronous emission
    subscriber.next(2);                 // synchronous emission
    setTimeout(() => {                  // async emissions after 100ms
        subscriber.next(3);
        subscriber.next(4);
        // (No complete() here, so the stream stays open unless unsubscribed.)
    }, 100);
});

// Subscribe to start receiving values.
const sub = myObservable.subscribe(observer);

// Unsubscribe after 200ms. Since 3 and 4 happen at 100ms, you'll see them,
// then this will prevent any future emissions (if there were any).
setTimeout(() => {
    console.log('Unsubscribing');
    sub.unsubscribe();
}, 200);
