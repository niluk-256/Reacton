import React from "react"
import shareVideo from "../assets/logo.mp4"
import metaVideo from "../assets/metamask-icon.svg"
import { ethers } from "ethers"
import { TypeAnimation } from "react-type-animation"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Ascii } from "./Ascii"

import { abi, contractAddress } from "../constants"
// import Meta from "../metaconnect"
export default function Home() {
  async function Meta() {
    if (typeof window.ethereum !== "undifined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // await window.ethereum.request({
      //   method: "eth_requestAccounts",
      // })
      await provider.send("eth_requestAccounts", [])
      console.log("Connected")
      const balance = await provider.getBalance("ethers.eth")
      const realb = ethers.utils.formatEther(balance)
      console.log(`${realb}`)
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
        <div className="flex justify-center items-center flex-wrap  h-screen">
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
            <div className="absolute flex flex-col items-center top-0 right-0 left-0 bottom-full bg-black-overlay">
              <div className="mt-20">
                <TypeAnimation
                  className="font-mono"
                  // Same String at the start will only be typed once, initially
                  sequence={[
                    "Hey  you!",
                    1000,
                    "Hmm.. REKT! ?",
                    1000,
                    " RUGPULL!",
                    1000,
                    "IMHO YOU GMI",
                    100,
                    "I use Arch BTW",
                    1000,
                    "Paradigm CTF🚩",
                    1000,

                    " 0xNILUKA ",
                    1000,
                    "BUILD WEB3",
                    1000,
                    "LFG!",
                    1000,
                    "THERE WE GO!",
                    1000,
                    "WAGMI🔥",
                    1000,
                  ]}
                  speed={50} // Custom Speed from 1-99 - Default Speed: 40
                  style={{ opacity: 0.5, color: "white", fontSize: "2em" }}
                  wrapper="h2" // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
              </div>
              <div className="mt-20 flex-wrap flex">
                <img className="opacity-60 w-10 mr-1" src={metaVideo} alt="" />
                <ConnectButton className="mb-6" />
              </div>
              <div className="flex flex-col md:mt-20 md:ml-20  sm:mt-20 sm:ml-20 mt-10 ml-5">
                <Ascii />
              </div>
            </div>
            {/* // */}
            {/* // */}
          </div>
        </div>
      </div>
    </div>
  )
}
