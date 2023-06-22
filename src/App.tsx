import { Products } from "./components/Products";
import { products } from './mocks/products.json'
import { useFilters } from "./hooks/useFilters";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { CartProvider } from "./contexts/cart";

export interface IFilter {
  category: string
  minPrice: number
}

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
