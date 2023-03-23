import request from 'superagent'

import {Movie} from '../Model/Movie'

export function getGreeting(): Promise<string> {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export async function getPopularMovies(){
  const pageNum= Math.floor((Math.random()*20)+1)
const response=await request.get(`https://api.themoviedb.org/3/movie/popular?api_key=ccc52bbb3a8aacd51522e744f91ea5a0&page=${pageNum}`)
return response.body.results
}

export async function getMovieByGenre(genreID: number) {
  const pageNum= Math.floor(Math.random()*20)
  const response = await request.get(`https://api.themoviedb.org/3/discover/movie?api_key=ccc52bbb3a8aacd51522e744f91ea5a0&with_genres=${genreID}&page=${pageNum}`)
  return response.body.results
}

export async function getMovieByID(id: number) {
  const response = await request.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ccc52bbb3a8aacd51522e744f91ea5a0&language=en-US`)
  return response.body
} 

// Genre IDs:
// Action: 28
// Drama: 18
// Comedy: 35
// Science Fiction: 878
// Romance: 10749
