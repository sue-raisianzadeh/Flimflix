import React from 'react'

const movieList = [
  {
    id: '123',
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
