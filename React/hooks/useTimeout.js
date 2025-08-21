
function useTimeout(callback, delay){
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        if(timerId){
            clearTimeout(timerId);
        }

        if(callback && delay !== null){
            const id = setTimeout(() => {
                callback();
            }, delay);

            setTimerId(id);
        }

        return () => {
            if(timerId){
                clearTimeout(timerId);
            }
        };

    },[callback, delay]);

    return timerId;
    // why return timerId?
    // Returning timerId can be useful for debugging or managing the timeout externally.
    // It allows you to clear the timeout later if needed, or to check if a timeout
}


// usage example
const MyComponent = () => {
    const handleTimeout = () => {
        console.log("Timeout executed");
    }

    useTimeout(handleTimeout, 3000);

};