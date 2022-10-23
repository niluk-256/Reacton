import React from "react"
import shareVideo from "../assets/logo.mp4"
import metaVideo from "../assets/metamask-icon.svg"
export default function Home() {
  return (
    <div>
      <div>
        <div className="ml-10 mr-11 mt-4 flex justify-between text-3xl mb-5 border-gray-500 font-semibold ">
          Home
          <button className="flex bg-slate-500 rounded-lg p-1 text-2xl font-sans text-gray-50 hover:bg-slate-900">
            <img className="w-10 mr-1" src={metaVideo} alt="" /> Connect
          </button>
        </div>
        <div className="flex justify-center items-center flex-col  h-screen">
          <div className="relative w-full h-full">
            <video
              src={shareVideo}
              type="video/mp4"
              loop
              controls={false}
              muted
              autoPlay
              className="w-full h-full object-cover"
            ></video>
            <div className="absolute flex flex-col items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay "></div>
          </div>
        </div>
      </div>
    </div>
  )
}
