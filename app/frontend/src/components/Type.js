import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Option from './Option'
import Product from './Product'
import ErrorBanner from './ErrorBanner'
import { OrderContext } from '../context/OrderContext'

const Type = ({orderType}) => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  
  const [orderData, updateItemCount] = useContext(OrderContext);
  console.log(orderData, updateItemCount);

  useEffect(() => {
    fetchItems(orderType)
  }, [orderType])

  const fetchItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`);
      console.log(response.data);
      setItems(response.data);
    }
    catch(error) {
      console.error(error);
      setError(true);
    }
  }

  if(error) {
    return <ErrorBanner message='에러가 발생했습니다' />;
  }

  const ItemComponent = orderType === 'products' ? Product : Option;

  const optionItems = items.map((item) => (
    <ItemComponent 
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ))

  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격: {orderData.totals[orderType]}</p>

      <div
        style={{
          display: 'flex',
          flexDirection: orderType === 'options' ? 'column' : 'row'
        }}
      >
        {optionItems}
      </div>
    </div>
  )
}

export default Type
