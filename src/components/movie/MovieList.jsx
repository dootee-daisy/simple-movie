import { Swiper, SwiperSlide } from "swiper/react"
import MovieCard from "./MovieCard"
import useSWR from "swr"
import { fetcher, tmdbAPI } from "../../conf"
// https://api.themoviedb.org/3/movie/now_playing?api_key=b085f5134c39cf7d7554e381a3a5e8b9
// eslint-disable-next-line react/prop-types
const MovieList = ({ type = "now_playing" }) => {
  const { data, isLoading } = useSWR(tmdbAPI.getMovies(null, type), fetcher)
  const movies = data?.results || []
  return (
    <>
      <div className="select-none movies-list">
        {isLoading ? (
          <div className="w-5 h-5 mx-auto border-2 rounded-full border-t-transparent animate-spin border-primary"></div>
        ) : null}
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default MovieList
