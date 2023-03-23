import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'

const movieList = [
  {
    id: '236',
    title: 'Superman',
    original_language: 'English',
    poster_path: 'https://123.123',
    overview: 'description example',
    vote_average: 4.5,
  },
  {
    id: '456',
    title: 'Batman',
    original_language: 'English',
    poster_path: 'https://123.123',
    overview: 'description example',
    vote_average: 5,
  },
  {
    id: '789',
    title: 'Spiderman',
    original_language: 'English',
    poster_path: 'https://123.123',
    overview: 'description example',
    vote_average: 6,
  },
  {
    id: '123',
    title: 'Superman',
    original_language: 'English',
    poster_path: 'https://123.123',
    overview: 'description example',
    vote_average: 7,
  },
]

const Movies = () => {
  return (
    <div>
      <div className="list__container">
        {movieList.map((movie, i) => (
          <div key={i}>
            <h1>Title: {movie.title}</h1>
            <h2>Language: {movie.original_language}</h2>
            <img src="" alt="" />
            <p>Overview: {movie.overview}</p>
            <Link to={`/movies/${movie.id}`}>More Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
