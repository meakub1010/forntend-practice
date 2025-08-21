import { useRef, useState } from "react";

function useFocus(){
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef(null);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    useEffect(() => {
        if(ref.current){
            const elem = ref.current;
            elem.addEventListener('focus', handleFocus);
            elem.addEventListener('blur', handleBlur);

            return () => {
                elem.removeEventListener('focus', handleFocus);
                elem.removeEventListener('blur', handleBlur);
            }
        }
    }, [ref.current]);


    return {
        ref,
        isFocused
    };
}