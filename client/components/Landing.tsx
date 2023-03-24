import React from 'react'

import { getPopularMovies } from '../apiClient'
import Movies from './Movies'

const Landing = () => {
  return (
    <div>
      
      <Movies setApi={() => getPopularMovies()} />
    </div>
  )
}

export default Landing
