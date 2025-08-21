// Concurrent mode in REact using useTransition, startTransition, and useDeferredValue


// import React, { useState, useTransition, useDeferredValue } from 'react';
// import ReactDOM from 'react-dom';
// import './styles.css';
// function App() {
//   const [isPending, startTransition] = useTransition();
//   const [count, setCount] = useState(0);
//   const deferredCount = useDeferredValue(count);

//   const handleClick = () => {
//     startTransition(() => {
//       setCount(c => c + 1);
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Concurrent Mode Example</h1>
//       <button onClick={handleClick} disabled={isPending}>
//         Increment Count
//       </button>
//       <p>Count: {count}</p>
//       <p>Deferred Count: {deferredCount}</p>
//       {isPending && <p>Loading...</p>}
//     </div>
//   );
// }



// Without Concurrent Mode

import Ract, {useState} from 'react';

const LargeList = ({items}) => {
    const [filter, setFilter] = useState('');


    const filtered = items.filter(item => item.includes(filter));


  return (
    <div>
        <input value={filter} onChange={(e) => setFilter(e.target.value) } />
        <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
    
  );
};


// with Concurrent Mode
import React, { useState, useTransition } from 'react';

const LargeListWithTransition = ({ items }) => {
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('');
    const [isPending, startTransition] = useTransition();

    const filtered = items.filter(item => item.includes(filter));

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        // Start a transition to update the filter
        startTransition(() => {
            setFilter(value);
        });
    };

    return (
        <div>
            <input value={input} onChange={handleChange} />
            <ul>
                {filtered.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );

};