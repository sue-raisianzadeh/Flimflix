import React, { useEffect, useState } from 'react'
import { Movie } from '../../Model/Movie'
import { getMovieByGenre } from '../apiClient'

interface Props {
  setApi: () => Promise<any>
}

const Movies = (props: Props) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w780'
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    props.setApi().then((res) => {
      setMovieList(res)
      console.log(res)
    })
  }, [])
  return (
    <div>
      <div className="list__container">
        {movieList.length &&
          movieList.map((movie: Movie, i) => (
            <div key={i}>
              <h1>Title: {movie.title}</h1>
              <h2>Language: {movie.original_language}</h2>
              <img src={imageBaseUrl + movie.poster_path} alt="" />
              <p>Rates: {movie.vote_average}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Movies
