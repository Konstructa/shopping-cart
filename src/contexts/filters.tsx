/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react'

export interface IFilters {
    category: string
    minPrice: number
}

interface IFiltersProps {
    setFilters: React.Dispatch<React.SetStateAction<IFilters>>
    filters: IFilters
}

interface IFiltersProvider {
    children: React.ReactNode
}

export const FiltersContext = createContext<IFiltersProps>({
    filters: 
    { 
        category: 'all', 
        minPrice: 250 
    },
    setFilters: () => {},
})

export function FiltersProvider ({ children }: IFiltersProvider) {
  const [filters, setFilters] = useState<IFilters>({
    category: 'all',
    minPrice: 250
  })


  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}