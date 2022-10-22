import React from "react"

import { BallTriangle } from "react-loader-spinner"
export function Spinner() {
  return (
    <div className="justify-center flex mt-48">
      {/* <Dna
        type="Circles"
        color="#dc1c2c"
        height={50}
        width={100}
        //timeout={1000} //3 secs
      /> */}
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  )
}
