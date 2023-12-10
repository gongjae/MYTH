import React from 'react'
import CheckoutWizard from '@/components/CheckoutWizard'

export default function Home() {
  return (
    <div>
      <CheckoutWizard activeStep={4} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
        <h1 className="text-center font-semibold text-4xl">
          결제가 완료되었습니다.
        </h1>
      </div>
    </div>
  )
}
