import React, { useContext, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'

const SummaryPage = ({setStep}) => {

  const [checked, setChecked] = useState(false);

  const [orderData] = useContext(OrderContext);
  console.log(orderData);

  const productArray = Array.from(orderData.products);
  console.log(productArray);

  const productList = productArray.map(([key, value]) => (
    <li key={key}>
      {key} 상품 : {value}개
    </li>
  ))

  const hasOptions = orderData.options.size > 0;
  let optionsDisplay = null;

  if(hasOptions) {

    const optionsArray = Array.from(orderData.options.keys());

    const optionList = optionsArray.map((key) => (
      <li key={key}>
        {key} 상품
      </li>
    ))

    optionsDisplay = (
      <>
        <p>옵션: {orderData.totals.options}</p>
        <ul>
          {optionList}
        </ul>
      </>
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  }

  return (
    <div>
      <h1>주문 확인</h1>
      <p>여행 상품: {orderData.totals.products}</p>

      <ul>
        {productList}
      </ul>

      {optionsDisplay}

      <form onSubmit={handleSubmit}>
        <input
          id='confirm-checkbox'
          type='checkbox'
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />

        <label htmlFor='confirm-checkbox'>
          주문하려는 것을 확인하셨나요?
        </label>

        <br />

        <button
          disabled={!checked}
          type='submit'
        >
          주문 확인
        </button>
      </form>
    </div>
  )
}

export default SummaryPage
