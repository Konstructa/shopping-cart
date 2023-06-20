import { FC } from "react"
import { AddToCartIcon } from "../Icons"
import './styles.css'

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
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map( product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
              <p>$ {product.price.toFixed(2)}</p>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
