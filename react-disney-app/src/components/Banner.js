import React, {useEffect, useState} from 'react'
import axiosInstance from '../api/axios'
import requests from '../api/requests'
import './Banner.css';
import styled from 'styled-components';

const Banner = () => {

  const [movie, setMovie] = useState(null);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    //비동기 요청
    //fetch().then() http GET

    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await axiosInstance.get(requests.fetchNowPlaying);
    //console.log(response);

    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id;
    //console.log(movieId);

    const {data: movieDetail} = await axiosInstance.get(`movie/${movieId}`, {
      params: {append_to_response: 'videos'}
    })

    setMovie(movieDetail);
    console.log('movieDetail', movieDetail)
  }

  if(!movie) {
    return <div>loading...</div>;
  }

  if(!isClicked) {
    return (
      <div className='banner'
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover'
        }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.original_title}
          </h1>

          <div className='banner__buttons'>
            {movie.videos?.results[0]?.key ?
              <button
                className='banner__button play'
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
              :null
            }
          </div>

          <p className='banner__description'>
            {movie.overview}
          </p>
        </div>

        <div className='banner__fadeBottom' />
      </div>
    )
  }
  else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            src={
              `https://www.youtube.com/embed/${movie.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1`
            }
          >
          
          </Iframe>
        </HomeContainer>
      </Container>
    )
  }
}

const Iframe = styled.iframe `
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
`

const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const HomeContainer = styled.div `
  width: 100%;
  height: 100%;
`

export default Banner
