import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import Landing from './Landing'
import Movies from './Movies'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

const App = () => {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)
  const [component, setComponent] = useState("landing")
  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
        setIsError(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [count])

  return (
    <>
      <Navbar />
      <Searchbar />
      {component === "landing" ? <Landing /> : <Movies />}


      {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
