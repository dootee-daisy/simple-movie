import "swiper/scss"
import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Main from "./components/layout/Main"
import Banner from "./components/banner/Banner"

const HomePage = lazy(() => import("./components/pages/HomePage"))
const MovieDetail = lazy(() => import("./components/pages/MovieDetail"))
const MoviesPage = lazy(() => import("./components/pages/MoviesPage"))
function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            />
            <Route path="/movies" element={<MoviesPage></MoviesPage>} />
            <Route
              path="/movie/:movieId"
              element={<MovieDetail></MovieDetail>}
            />
          </Route>
          <Route path="*" element={<>404 not found</>}></Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
