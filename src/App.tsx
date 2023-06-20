import { Products } from "./components/Products";
import products from './mocks/products.json'

function App() {
  return (
    <Products catalog={products} />
  )
}

export default App
