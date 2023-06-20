import { FC } from "react"
import { AddToCartIcon } from "../Icons"
import './styles.css'

interface Product {
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

interface Products {
  products: Product[],
  total: number,
  skip: number,
  limit: number
}

interface ListProps {
  catalog: Products
}

export const Products: FC<ListProps> = ({ catalog: { products } }) => {
  return (
    <main className="products">
      <ul>
        {products.map( product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
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
