import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", // Slice name
    initialState: { 
        items: [], // Initial state
    },
    reducers: {  // object of all reducers
        addItem: (state, action) => {
            state.items.push(action.payload); // ✅ Modify draft state
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            console.log(current(state)); //to print the state
            //state = []; //this will not modify the state parameter, this is another local variable
            state.items.length = 0; //mutating the state
            //return {items: []}; //sending the empty state, so we can return empty state or make length = 0 both are same
            
        }
    }
});

// Export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
