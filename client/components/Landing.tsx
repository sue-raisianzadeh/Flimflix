import React from 'react'

import { getPopularMovies } from '../apiClient'
import Movies from './Movies'


interface Props {
  search: string
}


const Landing = (props: Props) => {


  return (
    <div>
      





      <Movies search={props.search} setApi={() => getPopularMovies()} />



    </div>
  )
}

export default Landing
