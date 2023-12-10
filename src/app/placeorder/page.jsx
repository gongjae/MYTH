'use client'
import CheckoutWizard from '@/components/CheckoutWizard'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function PlaceOrderScreen() {
  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    totalPrice,
    taxPrice,
    shippingAddress,
    paymentMethod,
    loading,
  } = useSelector((state) => state.cart)

  const router = useRouter()
  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment')
    }
  }, [paymentMethod, router])

  return (
    <div>
      <CheckoutWizard activeStep={3} />
      <h1 className="mb-4 text-xl">결제 하기</h1>
      {loading ? (
        <div>Loading</div>
      ) : cartItems.length === 0 ? (
        <div>
          장바구니가 비었습니다. <Link href="/">쇼핑하러가기</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">배송지 주소</h2>
              <div>
                {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </div>
              <div>
                <Link className="default-button inline-block" href="/shipping">
                  Edit
                </Link>
              </div>
            </div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">결제 수단</h2>
              <div>{paymentMethod}</div>
              <div>
                <Link className="default-button inline-block" href="/payment">
                  Edit
                </Link>
              </div>
            </div>
            <div className="card overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">주문 상품</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="p-5 text-right">Quantity</th>
                    <th className="p-5 text-right">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td>
                        <Link
                          href={`/product/${item.id}`}
                          className="flex items-center"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            style={{
                              maxWidth: '100%',
                              height: 'auto',
                            }}
                            className="p-1"
                          ></Image>
                          {item.name}
                        </Link>
                      </td>
                      <td className=" p-5 text-right">{item.qty}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">
                        ${item.qty * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link className="default-button inline-block" href="/cart">
                  Edit
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">주문 확인</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>상품 금액</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>세금</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>배송비</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>총 금액</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => alert('Not implemented')}
                    className="primary-button w-full"
                  >
                    결제하기
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
