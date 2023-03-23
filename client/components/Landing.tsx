import React from 'react'
import Movies from './Movie'

const Landing = () => {
  return (
    <div>
      <h1>Dev Flicks</h1>
      <h2>Need help deciding what to watch? Choose a genre for suggestions!</h2>
      <Movies />
    </div>
  )
}

export default Landing