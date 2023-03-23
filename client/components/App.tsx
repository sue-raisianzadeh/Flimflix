import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getPopularMovies, getMovieByGenre } from '../apiClient'
import Landing from './Landing'
import Movies from './Movies'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

const App = () => {

  
  useEffect(() => {

    getPopularMovies()

      .catch((err) => {
        console.log(err)

      })

  

  }, [])

  return (
    <>
      <Navbar />
      <Searchbar />
      <Routes >
        <Route path='/' element={<Landing />} />
        <Route path='/:genre' element={<Movies setApi={() => getMovieByGenre(18)} />} />
      </Routes>
    </>
  )
}

export default App
