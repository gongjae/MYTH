export default function CheckoutWizard({ activeStep = 0 }) {
  const CheckoutSteps = [
    '회원 로그인',
    '배송지 주소',
    '결제수단',
    '결제확인',
    '결제완료',
  ]
  return (
    <div className="mb-5 flex flex-wrap">
      {CheckoutSteps.map((step, index) => (
        <div
          key={step}
          className={`flex-1 border-b-2 text-center 
              ${
                index <= activeStep
                  ? 'border-indigo-500 text-indigo-500'
                  : 'border-gray-400 text-gray-400'
              }`}
        >
          {step}
        </div>
      ))}
    </div>
  )
}
