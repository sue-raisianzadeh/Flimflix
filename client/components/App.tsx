import { useState, useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { getPopularMovies, getMovieByGenre } from '../apiClient'
import Landing from './Landing'
import Movies from './Movies'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Movie from './Movie'

const App = () => {
  const [search, setSearch] = useState("")

  useEffect(() => {
    getPopularMovies().catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className="background">
        <Searchbar search={search} setSearch={setSearch} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing search={search} />} />
          <Route
            path="/:genre"
            element={
              <Movies setApi={(genre: number) => getMovieByGenre(genre)} search={search} />
            }
          />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </div>
    </>
  )
}

export default App
