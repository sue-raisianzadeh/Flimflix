import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import Landing from './Landing'
import Movies from './Movies'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

const App = () => {
  const [component, setComponent] = useState("movie")
  useEffect(() => {
  
  }, [])

  return (
    <>
      <Navbar />
      <Searchbar />
      {component === "landing" ? <Landing /> : <Movies />}
    </>
  )
}

export default App
