export const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const apiKey = "b085f5134c39cf7d7554e381a3a5e8b9"

const tmdbEndpoint = "https://api.themoviedb.org/3"

export const tmdbAPI = {
  //`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
  getMovies: (nextPage, type) =>
    `${tmdbEndpoint}/movie/${type}?api_key=${apiKey}&page=${nextPage}`,
  searchMovies: (nextPage, filterDebounce) =>
    `${tmdbEndpoint}/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`,
  getDetailMovie: (movieId, type = null) =>
    `${tmdbEndpoint}/movie/${movieId}${type}?api_key=${apiKey}`,
}
