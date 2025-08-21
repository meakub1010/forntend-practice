// Controlled vs Uncontrolled Components
// controlled components are preferred 

const ControlledComponent = () => {
    const [value, setValue] = useState('');

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

const UncontrolledComponent = () => {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        alert(`Input value: ${inputRef.current.value}`);
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};  