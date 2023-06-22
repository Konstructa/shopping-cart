import { FC } from "react"
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons"
import './styles.css'
import { useCart } from "../../hooks/useCart"
import { ICartItem } from "../Cart/CartItem"

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}


export interface IProducts {
  products: IProduct[],
}

export const Products: FC<IProducts> = ({ products }) => {

  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product: IProduct) => {
    return cart?.some(item => item.id === product.id)
  }

  const convertToCartItems = (product: IProduct): ICartItem => {
    return {
      ...product,
      quantity: 1,
    };
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product: IProduct) => {
          const isProductInCart = checkProductInCart(product)
          const cartItem = convertToCartItems(product)
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(cartItem)
                      : addToCart(cartItem)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
