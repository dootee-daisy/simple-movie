import React from "react"
import "swiper/scss"
import { Swiper, SwiperSlide } from "swiper/react"
import MovieCart from "./MovieCart"
import useSWR from "swr"
import { fetcher } from "../../conf"
// https://api.themoviedb.org/3/movie/now_playing?api_key=b085f5134c39cf7d7554e381a3a5e8b9
const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = React.useState([])
  console.log("MovieList ~ movies:", movies)
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=b085f5134c39cf7d7554e381a3a5e8b9`,
    fetcher
  )
  React.useEffect(() => {
    if (data && data.results) setMovies(data.results)
  }, [data])
  return (
    <>
      <div className="select-none movies-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item}></MovieCart>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default MovieList
