import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters.tsx'

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

export interface IFilters {
  category: string
  minPrice: number
}

interface IFiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>
  filters: IFilters
}


export function useFilters () {
  const { filters, setFilters } = useContext<IFiltersProps>(FiltersContext)

  const filterProducts = (products: IProduct[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}