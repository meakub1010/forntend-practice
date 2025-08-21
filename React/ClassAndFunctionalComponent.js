
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('✅ Mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('🔄 Updated');
  }

  componentWillUnmount() {
    console.log('❌ Unmounted');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}



import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('✅ Mounted or Updated');

    // componentWillUnmount
    return () => {
      console.log('❌ Unmounted');
    };
  }, [count]); // only run when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

/*

| Class Lifecycle         | Function Component Equivalent              |
| ----------------------- | ------------------------------------------ |
| `constructor`           | `useState()` initialization                |
| `componentDidMount`     | `useEffect(() => { ... }, [])`             |
| `componentDidUpdate`    | `useEffect(() => { ... }, [dep])`          |
| `componentWillUnmount`  | `useEffect(() => { return () => {} }, [])` |
| `setState()`            | `useState()` and its setter                |
| `shouldComponentUpdate` | `React.memo()` or manual comparisons       |


*/