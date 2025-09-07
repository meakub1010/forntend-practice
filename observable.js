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




// Concepts
/*
An Observable in JavaScript is a data producer that emits multiple values over time, which you can subscribe to and react to as they arrive. 
Think of it as a stream of data—similar to how a Promise represents a single future value, an Observable can emit many values over time.

Observables are lazy, meaning they don’t start producing values until you subscribe. 
They are commonly used in RxJS, Angular, and reactive programming.


🔹 Key Concepts

Observable – defines the stream of data.

Observer – object with callbacks (next, error, complete) that reacts to data.

Subscription – connection between the Observable and the Observer; used to unsubscribe.

Operators – methods like map, filter, mergeMap to transform the stream.


🔹 Why Observables?

Can emit multiple values over time (unlike a Promise).

Can be cancelled (unsubscribe).

Support operators for functional composition of async streams.

Great for real-time data, user events, or API polling.

🔹 Analogy

Promise → “I will give you one value in the future.”

Observable → “Here’s a stream of values over time, and you can react to each one.”


*/


import { Observable } from 'rxjs';

// Create an Observable that emits 1, 2, 3 over time
const numbers$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete(); // stream ends
});

// Observer subscribes to Observable
numbers$.subscribe({
  next: value => console.log('Next:', value),
  error: err => console.error('Error:', err),
  complete: () => console.log('Done')
});

// Output:
// Next: 1
// Next: 2
// Next: 3
// Done 