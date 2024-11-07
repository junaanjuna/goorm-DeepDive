import React, {useRef} from 'react'
import './Modal.css';
import useOnClickOutside from '../hooks/useOnClickOutside'

const Modal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_data,
  first_air_date,
  vote_average,
  setIsModalOpen
}) => {

  const modalRef = useRef(null);
  console.log(modalRef);
  useOnClickOutside(modalRef, () => setIsModalOpen(false));

  return (
    <div className='presentation' role='presentation'>
      <div className='wrapper-modal'>
        <div className='modal' ref={modalRef}>
          <span
            onClick={() => setIsModalOpen(false)}
            className='modal-clos'
          >
            X
          </span>

          <img
            className='modal__poster-img'
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt='modal__poster-img'
          />

          <div className='modal__contents'>
            <p
              className='modal__details'
            >
              <span>
                100% for you
              </span>{' '}
              {release_data ? release_data : first_air_date}
            </p>

            <h2 className='modal__title'>
              {title ? title : name}
            </h2>

            <p className='modal__overview'>
              평점: {vote_average}
            </p>

            <p className='modal__overview'>
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
