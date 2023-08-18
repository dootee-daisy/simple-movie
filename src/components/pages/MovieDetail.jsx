import { useParams } from "react-router-dom"
import useSWR from "swr"
import { fetcher, tmdbAPI } from "../../conf"
import { SwiperSlide, Swiper } from "swiper/react"
import PropTypes from "prop-types"
import MovieCard from "../movie/MovieCard"
const MovieDetail = () => {
  const { movieId } = useParams()
  const { data, isLoading } = useSWR(tmdbAPI.getDetailMovie(movieId), fetcher)
  if (!data) return null
  return (
    <div className="select-none">
      {isLoading ? (
        <div className="w-5 h-5 mx-auto border-2 rounded-full border-t-transparent animate-spin border-primary"></div>
      ) : null}
      <div
        className="relative w-full h-screen bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="w-3/4 mx-auto overflow-hidden rounded-lg h-[600px] shadow-sm shadow-primary z-10 relative -mt-[300px]">
        <img
          className="object-cover w-full h-full "
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt=""
        />
      </div>
      <div className="m-10">
        <h2 className="text-3xl font-semibold text-center text-white ">
          {data.title}
        </h2>
      </div>
      <div className="flex justify-center gap-5 my-5">
        {data.genres.map((item) => (
          <div
            className="px-5 py-2 border rounded-3xl border-primary text-primary"
            key={item.id}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="max-w-[75%] mx-auto">
        <p className="w-full leading-normal text-center text-white">
          {" "}
          {data.overview}
        </p>
        <MovieMeta type="/credits" movieId={movieId}></MovieMeta>
      </div>
      <MovieMeta type="/videos" movieId={movieId}></MovieMeta>
      <MovieMeta type="/similar" movieId={movieId}></MovieMeta>
    </div>
  )
}

const MovieMeta = ({ movieId, type = "/videos" }) => {
  const { data } = useSWR(tmdbAPI.getDetailMovie(movieId, type), fetcher)
  if (!data) return null
  switch (type) {
    case "/videos":
      return (
        <>
          {data.results.slice(0, 2).map((item) => (
            <div key={item.id} className="w-3/4 mx-auto mt-10 aspect-video">
              <div className="p-2 text-2xl text-white bg-primary">
                {item.name}
              </div>
              <iframe
                width="956"
                height="538"
                src={`https://www.youtube.com/embed/${item.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </>
      )

    case "/similar":
      return (
        <>
          <div className="mt-10 text-3xl select-none movies-list">
            <div className="p-3 text-white bg-primary">Similar</div>
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
              {data.results.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCard item={item}></MovieCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )

    case "/credits":
      return (
        <>
          <div className="my-10 text-2xl text-center text-white">Casts</div>
          <div className="casts">
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
              {data.cast.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="w-full pt-[100%] bg-cover rounded-md border border-primary"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.profile_path})`,
                    }}
                  ></div>
                  <h2 className="font-bold text-center text-primary">
                    {item.original_name}
                  </h2>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )

    default:
      return null
  }
}

MovieMeta.propTypes = {
  movieId: PropTypes.number,
  type: PropTypes.string,
}

export default MovieDetail
