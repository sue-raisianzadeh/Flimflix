import React from 'react'

import { getPopularMovies } from '../apiClient'
import Movies from './Movies'


const Landing = () => {

  return (
    <div>


      <h1>Dev Flicks</h1>
      <h2>Need help deciding what to watch? Choose a genre for suggestions!</h2>


      


      <Movies setApi={() => getPopularMovies()} />


    </div>
  )
}

export default Landing