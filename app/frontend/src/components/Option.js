import React from 'react'

const Option = ({name}) => {
  return (
    <form>
      <input 
        type='checkbox'
        id={`${name} option`}
      />{' '}

      <label htmlFor='option'>{name}</label>
    </form>
  )
}

export default Option
