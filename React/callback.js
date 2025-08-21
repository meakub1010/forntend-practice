import { use, useCallback } from "react";

const memoizedCallback = useCallback(()=> {
    // Your callback logic here
    console.log("Callback executed with a:", a, "and b:", b);

}, [a,b]);

const memoizedValue = useMemo(() => {
    // Your memoized value logic here
    // expensive computation based on `a`

}, [a]);


// handle memory leaks and performance issues

useEffect(() => {
    // standard code using various respurces
    const id = setInterval(() => {
        console.log("Interval running");
    }, 1000);

    return () => {
        clearInterval(id);
        // Cleanup code to prevent memory leaks
        console.log("Cleanup function executed");
    }
}, [dependencies]);


