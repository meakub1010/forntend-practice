
function useInterval(callback, delay){
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if(delay === null) return;

        const intervalId = setInterval(() => {savedCallback.current()}, delay);
        return () => clearInterval(intervalId);
    }, [delay]);
}