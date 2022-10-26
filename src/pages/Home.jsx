import React from "react"
import shareVideo from "../assets/logo.mp4"
import metaVideo from "../assets/metamask-icon.svg"
import { ethers } from "ethers"
import { TypeAnimation } from "react-type-animation"
import { ConnectButton } from "@rainbow-me/rainbowkit"

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
        {/* <div className="ml-20 mr-11 mt-4 flex justify-center text-3xl mb-5 border-gray-500 font-semibold ">
          Home
        </div> */}
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
            <div className="absolute flex flex-col items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay ">
              <div className="mt-40 ">
                <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={[
                    "Hey who the fk are you?",
                    1000,
                    "Hmm.. REKT! ?",
                    1000,
                    "HCERINU RUGPULL!",
                    1000,
                    "IMHO YOU GMI",
                    100,
                    "I use Arch BTW🔺",
                    1000,
                    "Paradigm CTF🚩",
                    1000,

                    " 0xNILUKA",
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
              <div className="mt-20">
                <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={[
                    "0XNILUK ",
                    5000,
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non venenatis nisl. Aliquam erat volutpat. Sed euismod erat ac ante varius, et pulvinar neque rhoncus. Suspendisse non diam lacus. Cras aliquam ipsum vitae orci lacinia pellentesque. Cras a gravida urna. Morbi at arcu massa. Mauris commodo, tellus ac elementum gravida, nulla ligula tincidunt erat, a dignissim nulla tortor eget purus",
                    1000,
                    "Nice",
                    1000,
                  ]}
                  speed={10} // Custom Speed from 1-99 - Default Speed: 40
                  style={{ opacity: 0.5, color: "white", fontSize: "1em" }}
                  wrapper="h2" // Animation will be rendered as a <span>
                  repeat={2} // Repeat this Animation Sequence infinitely
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
