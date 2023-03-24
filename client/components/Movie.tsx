import React from 'react'
import { getMovieByID, getPopularMovies } from '../apiClient'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Movie = () => {
  const { id } = useParams()
  const parsedId = Number(id)
  const [ID, setID] = useState(parsedId)
  const [data, setData] = useState('')

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w780'

  useEffect(() => {
    // getMovieByID(Number(id)).then((data) => {console.log(data)}).catch((err) => {
    //   console.log(err)

    // })
    getMovieByID(ID)
      .then((movies) => {
        setData(movies)
        console.log(movies)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ID])

  return (
    <div className="detail__container" style={{ marginLeft: '200px' }}>
      <h3>{data.title}</h3>

      <p>
        <i>{data.tagline}</i>
      </p>
      <p>Popularity: {data.popularity}</p>
      <p>Date of release: {data.release_date}</p>
      <p>Runtime: {data.runtime} minutes</p>
      <p>Overview: {data.overview}</p>
      <img src={imageBaseUrl + data.poster_path} alt="" />
    </div>
  )
}

export default Movie
