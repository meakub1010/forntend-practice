import { useEffect, useRef, useState } from "react"

function useHover(){
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const ref = useRef(null);


    const handleMouseHover = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    useEffect(() => {
        const node = ref.current;
        if(node){
            node.addEventListener('mouseover', handleMouseHover);
            node.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            if(node){
                node.removeEventListener('mouseover', handleMouseHover);
                node.removeEventListener('mouseout', handleMouseOut);
            }
        }
    }, [ref.current]);


    return {
        ref,
        isHovered
    };
}


// usage
function App() {
  const {ref, isHovered} = useHover()
  return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
}