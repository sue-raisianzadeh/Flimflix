import React from 'react'
import { Link } from 'react-router-dom'

const genreList = ['Comedy', 'Drame', 'Action', 'Romantic', 'S/F']

const Navbar = () => {
  return (
    <div className="sidenav">
      <nav>
        <ul>
          {}
          <li>
            <Link to={`/movie/${genreList}`}>{genreList}</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
