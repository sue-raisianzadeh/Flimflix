import React from 'react'

import { getPopularMovies } from '../apiClient'
import Movies from './Movies'

interface Props {
  search: string
}


const Landing = (props: Props) => {

  return (
    <div>


      <h1>Dev Flicks</h1>
      <h2>Need help deciding what to watch? Choose a genre for suggestions!</h2>


      


      <Movies search={props.search} setApi={() => getPopularMovies()} />


    </div>
  )
}

export default Landing