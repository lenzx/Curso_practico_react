import { useState } from "react";

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state,setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart : [...state.cart, payload]
        });
    };

    const removeCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items[0].id != payload.id)
        });
    }
    return {
        state,
        addToCart,
        removeCart
    }
}

export default useInitialState;
