import { useState, useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { getPopularMovies, getMovieByGenre } from '../apiClient'
import Landing from './Landing'
import Movies from './Movies'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Movie from './Movie'

const App = () => {
  useEffect(() => {
    getPopularMovies().catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>

      <div className="background">
        <Searchbar />

        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/:genre"
            element={
              <Movies setApi={(genre: number) => getMovieByGenre(genre)} />
            }
          />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </div>

    </>
  )
}

export default App
