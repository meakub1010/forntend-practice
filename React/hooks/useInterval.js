
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

export default useInterval;

// Usage example
function Timer() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return <div>{count}</div>;
}