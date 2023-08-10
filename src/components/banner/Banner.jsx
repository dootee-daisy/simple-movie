import React from "react"

const Banner = () => {
  return (
    <>
      <section className="banner h-[400px] relative rounded-lg overflow-hidden page-container">
        <div className="absolute inset-0 bg-black opacity-30 layout "></div>
        <img
          src="https://genk.mediacdn.vn/139269124445442048/2023/3/21/1-16789527941271488886901-1679413960731-16794139616321626370107.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute text-white content left-5 bottom-5">
          <h2 className="mb-10 text-4xl font-semibold">Avengers: Endgame</h2>
          <div className="flex gap-3 mb-10">
            <span className="px-3 py-2 border rounded-lg border-slate-400 ">
              Action
            </span>
            <span className="px-3 py-2 border rounded-lg border-slate-400 ">
              Adventure
            </span>
            <span className="px-3 py-2 border rounded-lg border-slate-400 ">
              Action
            </span>
          </div>
          <button className="flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-primary">
            {" "}
            Watch
          </button>
        </div>
      </section>
    </>
  )
}

export default Banner
