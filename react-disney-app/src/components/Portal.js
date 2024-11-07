import React, {useState} from 'react'
import TestModal from './TestModal'

const modalWrapperStyle = {
  position: 'relative',
  zIndex: 1
}

const higherIndexWrapperStyle = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'blue',
  padding: '10px',
}

const Portal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        style={modalWrapperStyle}
        onClick={() => console.log('clicked')}
      >
        <button
          onClick={() => setIsModalOpen(true)}
        >
          모달 열기
        </button>

        {/*모달*/}

        <TestModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          모달 내용
        </TestModal>
      </div>

      <div style={higherIndexWrapperStyle}>Z-Index2</div>
    </>
  )
}

export default Portal
