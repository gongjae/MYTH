import Image from 'next/image'
import Footer from './Footer/Footer'
import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'

export default function HomePage() {
  const { products } = data

  const filteredProducts = products.filter((product) => {
    const productId = parseInt(product.id, 9)
    return productId >= 13 && productId <= 20
  })

  return (
    <div
      className="container mx-auto text-center bg-cover"
      style={{ backgroundImage: 'url("/public/image/logo.jpg")' }}
    >
      {/* 가운데 큰 이미지 */}
      <div className="mb-8">
        <Image
          src="/image/logo.jpg"
          alt="main pic"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>

      {/* 인기 상품 목록 */}
      <h2 className="text-2xl font-bold text-black mb-4">인기 상품</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
