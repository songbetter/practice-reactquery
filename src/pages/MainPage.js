import ProductItem from '../components/product/ProductItem'
import { useProduct } from '../hooks/useProduct'

const MainPage = () => {
  return (
    <section className="flex-col p-4">
      <div className="text-xl font-bold">Products</div>
      <div className="flex">
        <ProductItem {...useProduct(1)} />
        <ProductItem {...useProduct(2)} />
      </div>
    </section>
  )
}

export default MainPage
