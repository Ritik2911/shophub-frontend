import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    itemNumber:0,
    totalCartValue:0,
    
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addToCart: (state,action) => {
            const product = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.ID === product.id);

            if (existingItemIndex !== -1) {
                // If the product is already in the cart, you can update the quantity or other properties.
                state.cartItems[existingItemIndex].quantity += 1; // For example, increment the quantity.
                
            } else {
                // If it's a new product, you can add it to the cart.
                const productToAdd = {
                    ID: product.id,
                    product:product,
                    // You can add other properties here, such as name, price, etc.
                    quantity: 1, // Initialize quantity to 1 for the new item.
                };
                state.cartItems.push(productToAdd);
            }

            // Update the total cart value and item number.
            state.totalCartValue = state.cartItems.reduce((total, item) => total + (item.quantity * item.product.price), 0);
            state.itemNumber = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        removeFromCart:(state, action) => {
            const product = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.ID === product.id);
            const cartItem = state.cartItems[existingItemIndex];

            if(cartItem.quantity > 1){
                state.cartItems[existingItemIndex].quantity -= 1;
            }else{
                state.cartItems.splice(existingItemIndex, 1);
            }
            // Update the total cart value and item number.
            state.totalCartValue = state.cartItems.reduce((total, item) => total + (item.quantity * item.product.price), 0);
            state.itemNumber = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
    
    }
})

export  const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;