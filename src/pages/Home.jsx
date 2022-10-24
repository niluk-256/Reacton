import React from "react"
import shareVideo from "../assets/logo.mp4"
import metaVideo from "../assets/metamask-icon.svg"
import { abi, contractAddress } from "../constants"
// import Meta from "../metaconnect"
export default function Home() {
  async function Meta() {
    if (typeof window.ethereum !== "undifined") {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      console.log("Connected")
      // console.log(ethers)
      // inputfnd.disabled = false
      // inputfnd.placeholder = "Amount.."
      // icodiv[0].style.color = "green"
      // inputfnd.style.border = "2px solid green"
    } else {
      console.log("there's no metamask")
    }
  }
  //balance

  return (
    <div>
      <div>
        <div className="ml-10 mr-11 mt-4 flex justify-between text-3xl mb-5 border-gray-500 font-semibold ">
          Home
          <button
            onClick={Meta}
            id="meta"
            className={
              "flex bg-slate-500 rounded-lg p-1 text-2xl font-sans text-red-500 hover:bg-slate-900 pr-2"
            }
          >
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
