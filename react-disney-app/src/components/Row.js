import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axios'
import './Row.css';
import Modal from './Modal';

const Row = ({title, id, fetchUrl}) => {

  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    async function fetchMovieData() {
      const response = await axiosInstance.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchMovieData();
  }, [fetchUrl])

  const handleClick = (movie) => {
    setIsModalOpen(true);
    setMovieSelected(movie);
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className='row__poster'
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {
        isModalOpen ?
          <Modal
            // movieSelected={movieSelected}
            {...movieSelected}
            setIsModalOpen={setIsModalOpen}
          />
          :
          null
      }
    </div>
  )
}

export default Row
