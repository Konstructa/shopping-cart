/* eslint-disable @typescript-eslint/no-empty-function */
import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'
import { CartActionKind } from '../types/CartActionKind.js'
import { ICartItem } from '../components/Cart/CartItem.js'

interface ICartProvider {
    children: React.ReactNode
}

interface ICartContext {
    cart: ICartItem[]
    addToCart: (product: ICartItem) => void
    removeFromCart: (product: ICartItem) => void
    clearCart: (product: ICartItem) => void
}

export const CartContext = createContext<ICartContext>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { }
});

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product: ICartItem) => dispatch({
        type: CartActionKind.ADD_TO_CART,
        payload: product
    })

    const removeFromCart = (product: ICartItem) => dispatch({
        type: CartActionKind.REMOVE_FROM_CART,
        payload: product
    })

    const clearCart = (product: ICartItem) => dispatch({
        type: CartActionKind.CLEAR_CART,
        payload: product
    })

    return { state, addToCart, removeFromCart, clearCart }
}


export function CartProvider({ children }: ICartProvider) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}