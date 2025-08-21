
export function useDebounce(callback, delay, immediate = false){

    let timerId = null;

    return function(...args){
        clearTimeout(timerId);
        if(immediate && !timerId){
            callback.apply(this, ...args);
        }

        timerId = setTimeout(() => {
            if(!immediate){
                callback.apply(this, ...args);
            }
            timerId = null; // Reset timerId after execution
        }, delay);

    };

}

// Usage example
// const debouncedFunction = useDebounce(() => {
//     console.log('Debounced function executed');
// }, 300); 


// Another implementation is set debounced value


const useDebouncedValue = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler); // this will reset the timeout if value or delay changes
        };
    }, [value, delay]);

    return debouncedValue;
}


// Usage example
const SearchBox = () => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebouncedValue(input, 500);

  useEffect(() => {
    if (debouncedInput) {
      console.log('Triggering API with:', debouncedInput);
    }
  }, [debouncedInput]);

  return <input value={input} onChange={(e) => setInput(e.target.value)} />;
};
