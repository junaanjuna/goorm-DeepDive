import React, {forwardRef, useRef} from 'react'

const ChildComponents = ({refabc}) => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={refabc} />
      <button onClick={handleClick}>클릭</button>
    </>
  )
}

export default ChildComponents
