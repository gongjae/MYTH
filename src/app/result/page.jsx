import React from 'react'
import CheckoutWizard from '@/components/CheckoutWizard'

export default function Home() {
  return (
    <div className="text-center">
      <CheckoutWizard activeStep={4} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-8">
        <div className="col-span-1 mx-auto">
          <h1 className="text-4xl font-semibold mb-4">
            결제가 완료되었습니다!
          </h1>
          <p className="text-gray-600">
            감사합니다. 주문이 성공적으로 완료되었습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
