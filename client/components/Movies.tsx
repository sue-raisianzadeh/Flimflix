import Movie from './Movie'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieType } from '../../Model/Movie'
import { getMovieByGenre } from '../apiClient'

interface Props {
  setApi: (genre?: number) => Promise<any>
}

const Movies = (props: Props) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w780'
  const [movieList, setMovieList] = useState([])
  const [genre, setGenre] = useState(0)
  const { genre: param } = useParams()

  useEffect(() => {

    setGenre(Number(param))
    if (genre) {
      props.setApi(genre).then((res) => {
        setMovieList(res)
        console.log(res)
      })
    } else if(!param) {
      props.setApi().then(res => {
        setMovieList(res)
        console.log(res)
      })
    }
  }, [param, genre])

  return (
    <div>
      <div className="list__container">
        {movieList.length &&
          movieList.map((movie: MovieType, i) => (
            <div key={i} >
              <h1>{movie.title}</h1>
              <h3>Rates: {movie.vote_average}</h3>

              <img src={imageBaseUrl + movie.poster_path} alt="" />
              <a href={`/movies/${movie.id}`}>View Detail</a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Movies
