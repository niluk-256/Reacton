import React from "react"
import shareVideo from "../assets/logo.mp4"
export default function Home() {
  return (
    <div>
      <div>
        <div className="mt-4 flex justify-center text-3xl mb-5 border-gray-500 font-semibold ">
          Home
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
