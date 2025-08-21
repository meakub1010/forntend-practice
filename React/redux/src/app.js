import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from './features/cart/cartSlice'; // Assuming you have actions defined in
function App(){

    const dispatch = useDispatch();

     const newItem = { id: 1, name: 'Apple', price: 1.5 };

    return (
        <div>
            <h1>Redux App</h1>

              <button onClick={() => dispatch(addItem(newItem))}>-</button>
                <button onClick={() => dispatch(removeItem({id: item.id}))}>+</button>

            <p>This is a simple Redux application.</p>
        </div>
    );
}