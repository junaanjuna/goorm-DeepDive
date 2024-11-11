import React from 'react'

const Product = ({
  name,
  imagePath,
  updateItemCount
}) => {
  const handleChange = (event) => {
    updateItemCount(name, event.target.value)
  }
  return (
    <div style={{textAlign: 'center'}}>
      <img
        style={{width: '75%'}}
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
      />

      <form style={{marginTop: '10px'}}>
        <label style={{textAlign: 'right'}}>{name}</label>
        <input
          type='number'
          defaultValue={0}
          min='0'
          name='quantity'
          id='quantity'
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default Product
