import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../api/axios';

const DetailPage = () => {

  // http://localhost:3001/1482   =>  useParams
  // http://localhost:3001/search?q=spiderman  =>  useLocation 

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  // 상세 영화에 대한 데이터 받아오기
  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(
        `https://api.themoviedb.org/3/movie/${movieId}`
      )
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])


  if(!movie) return (
    <div>
      loading...
    </div>
  )

  return (
    <section>
      <img 
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt='detailed movie'
      />
    </section>
  )
}

export default DetailPage