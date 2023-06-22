export interface ICartItem {
    id: number
    thumbnail: string
    price: number
    title: string
    quantity: number
}

interface ICartItemProps extends ICartItem {
    addToCart: () => void
}

export const CartItem = (
    { thumbnail, price, title, quantity, addToCart }
        : ICartItemProps) => {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qtd: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}
