import { useState, useEffect } from 'react'
import { getPopularMovies, getMovieByGenre } from '../apiClient'
import Landing from './Landing'
import Movies from './Movies'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Movie from './Movie'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [component, setComponent] = useState("movie")

  useEffect(() => {

    getPopularMovies()
      .then((movies) => {
        console.log(movies);
        
      })
      .catch((err) => {
        console.log(err)
        
      })

  

  }, [])

  return (
    <>
      <Navbar />
      <Searchbar />
      {component === "landing" ? <Landing /> : <Movies />}
      <Routes>
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
      
    </>
  )
}

export default App
