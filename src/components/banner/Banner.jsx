import { Swiper, SwiperSlide } from "swiper/react"
import useSWR from "swr"
import { fetcher } from "../../conf"
import { useNavigate } from "react-router-dom"

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=b085f5134c39cf7d7554e381a3a5e8b9`,
    fetcher
  )
  const movies = data?.results || []
  return (
    <>
      <section className="banner h-[400px] relative rounded-lg overflow-hidden page-container">
        <Swiper slidesPerView="auto" grabCursor={true}>
          {movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}
// eslint-disable-next-line react/prop-types
const BannerItem = ({ item }) => {
  const navDetail = useNavigate()
  // eslint-disable-next-line react/prop-types
  const { title, poster_path } = item
  return (
    <>
      <div className="absolute inset-0 bg-black opacity-30 layout"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="absolute text-white content left-5 bottom-5">
        <h2 className="mb-10 text-4xl font-semibold">{title}</h2>
        <div className="flex gap-3 mb-10">
          <span className="px-3 py-2 border rounded-lg border-slate-400 ">
            Action
          </span>
        </div>
        <button
          onClick={() => navDetail(`/movie/${item.id}`)}
          className="flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-primary"
        >
          {" "}
          Watch
        </button>
      </div>
    </>
  )
}

export default Banner
