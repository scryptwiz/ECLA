import { useState } from "react"
import Helmet from "react-helmet"
import Footer from "../static/Footer"
import Header from "../static/Header"
import Limits from "../static/Limit"
import Swap from "../static/Swap"
const Homepage = () => {
  const [swap, setswap] = useState(true)
  const [limit, setlimit] = useState(false)
  const [liqudity, setliqudity] = useState(false)
  const swapBtn = () => {
    setswap(true)
    setlimit(false)
    setliqudity(false)
  }
  const limitBtn = () => {
    setswap(false)
    setlimit(true)
    setliqudity(false)
  }
  const liquidityBtn = () => {
    setswap(false)
    setlimit(false)
    setliqudity(true)
  }
  return (
    <>
      <div className="main_bg w-11/12 mx-auto pt-10">
        <Helmet>
          <title>ECLA Wallet</title>
        </Helmet>
        <Header/>
        <div className="inner_bg rounded flex justify-between text-white text-xs mt-16 mx-auto w-fit gap-2">
          <button onClick={swapBtn} className={`px-7 font-medium py-3 ${swap? 'active' : null}`}>Swap</button>
          <button onClick={limitBtn} className={`px-3 font-medium py-3 ${limit? 'active' : null}`}>Limit</button>
          <button onClick={liquidityBtn} className={`px-7 font-medium py-3 ${liqudity ? 'active' : null}`}>Liquidity</button>
        </div>
        { swap? <Swap/>: limit ? <Limits/>: liqudity ? <Swap/> : null}
      </div>
      <Footer/>
    </>
  )
}

export default Homepage