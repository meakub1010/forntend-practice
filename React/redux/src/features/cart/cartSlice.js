const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []},
    reducers:{
        addItem:(state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.item = state.items.filter(item => item.id !== action.payload.id);
        },
    }
});