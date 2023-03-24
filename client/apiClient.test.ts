const request = require('supertest')
const api = require('./apiClient')

test('getPopularMovies should return an array containing objects of various movies', () => {
  const expected = true
  return request(api).get('/').expect('Content-Type', /json/).then((res: { body: { results: any } }) => {expect(Array.isArray(res.body.results)).toBe(expected)})
})