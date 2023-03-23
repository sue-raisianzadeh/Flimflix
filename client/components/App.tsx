import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getPopularMovies, getMovieByGenre } from '../apiClient'
import Landing from './Landing'
import Movies from './Movies'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

const App = () => {
  const [component, setComponent] = useState("movie")
  
  useEffect(() => {

    getPopularMovies()
      .then((movies) => {
        console.log(movies);
        
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })

  

  }, [])

  return (
    <>
      <Navbar />
      <Searchbar />
      <Routes >
        <Route path='/' element={<Landing />} />
        <Route path='/:genre' element={<Movies />} />
      </Routes>
    </>
  )
}

export default App
