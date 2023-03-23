import React from 'react'
import { getMovieByID,getPopularMovies } from '../apiClient'
import { useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'


const Movie = () => {
  const {id} = useParams()
  const parsedId=Number(id)
  const [ID,setID]=useState(parsedId)
  const [movieData, setMovieData]=useState('')

  useEffect(() => {
    // getMovieByID(Number(id)).then((data) => {console.log(data)}).catch((err) => {
    //   console.log(err)
     
    // })
    getMovieByID(ID)
      .then((movies) => {
        setMovieData(movies)
        console.log(movies)
        
      })
      .catch((err) => {
        console.log(err)
        
      })



  },[ID])
  
  
  return (
    <div>
    </div>
  )
}

export default Movie