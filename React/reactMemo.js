import React, {useState, memo} from "react";

const Child = memo(({value}) =>{
    console.log("Child component rendered");
    return <div>Value: {value}</div>;
});

const Parent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <Child value={text} /> // This will not re-render when count changes


            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <p>Count: {count}</p>
        </div>
    );  
}

export default Parent;


// CUSTOM COMPARISON WITH REACT.MEMO

const childWithCustomComparison = (({value}) => {
    console.log("Child component rendered with custom comparison");
    return <div>Value: {value}</div>;
}, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value; // Skip re-render if true
});



// SUMMARY:
// use it when you want to prevent unnecessary re-renders of a component that receives props that do not change frequently.
// component is heavy and expensive to render.
// use it when component is pure and output is determined by props.
// use it when you want to optimize performance in a React application.