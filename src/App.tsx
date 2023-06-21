import { Products } from "./components/Products";
import { products } from './mocks/products.json'
import { useFilters } from "./hooks/useFilters";
import { Header } from "./components/Header";

export interface IFilter {
  category: string
  minPrice: number
}

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
