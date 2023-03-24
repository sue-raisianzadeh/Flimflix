import React from 'react'
import { getMovieByGenre } from '../apiClient'
import { Link } from 'react-router-dom'
import Movie from './Movie'

const genreList = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
]
const Navbar = () => {
  return (
    <div className="sidenav">
      <nav>
        <ul>
          <li>
            <Link to={'/'}> Home </Link>
          </li>
          <li>
            {genreList.map((genre) => (
              <Link key={genre.id} to={`/${genre.id}`}>
                {genre.name}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
