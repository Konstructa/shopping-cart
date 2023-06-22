import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons'
import { CartItem } from './CartItem'
import './styles.css'
import { useCart } from '../../hooks/useCart'

export const Cart = () => {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart();

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <div className='cart-items'>
                    <ul>
                        {cart.length > 0
                        ? 
                        cart?.map(product => (
                            <CartItem
                                key={product.id}
                                addToCart={() => addToCart(product)}
                                {...product}
                            />
                        )) 
                        : 
                        <p>Empty</p>}
                    </ul>

                    <button onClick={() => clearCart(cart[10])}>
                        <ClearCartIcon />
                    </button>
                </div>
            </aside>
        </>
    )
}
