import { useState } from "react"
import Helmet from "react-helmet"
import Footer from "../static/Footer"
import Header from "../static/Header"
import Limits from "../static/Limit"
import Swap from "../static/Swap"
import {Link} from 'react-router-dom'
import Table from "../static/Table"
import Wallet from "../static/Wallet"
import Transfers from "../static/Transfers"
import Liquidity from "../static/Liquidity"
const Homepage = () => {
  const [connectPage, setConnectPage] = useState('swap')
  return (
    <div className="spiral_bg overflow-x-hidden">
      <div className={`main_bg w-11/12 mx-auto pt-10 ${connectPage==='transfers'|| connectPage==='liquidity' || connectPage==='balance'?'h-screen overflow-y-auto' : ''}`}>
        <Helmet>
          <title>ECLA {connectPage}</title>
        </Helmet>
        <Header/>
        <div className="inner_bg rounded flex justify-between text-white text-xs mt-16 mx-auto w-full sm:w-fit gap-2 overflow-x-auto">
          <button onClick={()=>setConnectPage('swap')} className={`pl-5 pr-3 font-medium py-3 ${connectPage==='swap'? 'active' : null}`}>Swap</button>
          <button onClick={()=>setConnectPage('limit')} className={`px-3 font-medium py-3 ${connectPage==='limit'? 'active' : null}`}>Limit</button>
          <button onClick={()=>setConnectPage('liquidity')} className={`px-3 font-medium py-3 ${connectPage==='liquidity' ? 'active' : null}`}>Liquidity</button>
          <button onClick={()=>setConnectPage('wallet')} className={`px-3 font-medium py-3 ${connectPage==='wallet' ? 'active' : null}`}>Wallet</button>
          <button onClick={()=>setConnectPage('balance')} className={`px-3 font-medium py-3 ${connectPage==='balance' ? 'active' : null}`}>Balance</button>
          <button onClick={()=>setConnectPage('transfers')} className={`px-3 font-medium py-3 ${connectPage==='transfers' ? 'active' : null}`}>Transfers</button>
          <button onClick={()=>setConnectPage('NFTs')} className={`pl-3 pr-5 font-medium py-3 ${connectPage==='NFTs' ? 'active' : null}`}>NFTs</button>
        </div>
        <div className={` ${connectPage!=='wallet'&&connectPage!=='liquidity'?'inner_bg p-5 w-11/12': 'p-0 w-full'} mx-auto lg:w-10/12  mt-10 flex flex-col justify-between rounded`}>
          <div className="flex lg:flex-row flex-col justify-between rounded">
            <div className={`lg:w-4/6 w-full md:p-5 ${connectPage==='wallet' || connectPage==='liquidity'||connectPage==='transfers'||connectPage==='balance'? 'hidden' : ''}`}>
                <div className="flex flex-col md:flex-row justify-between">
                    <span className="flex justify-between md:flex-row flex-col w-10/12">
                        <span>
                            <span className="flex items-center">
                                <Link to='/'>
                                  <img src="/assets/ecl.png" className="h-7" alt="ECLA LOGO"/>
                                </Link>
                                <Link to='/'>
                                  <img src="/assets/bin.png" className="h-7 ml-2" alt="Binance LOGO"/>
                                </Link>
                                <Link to=''>
                                  <img src="/assets/exchange.png" className="h-7 ml-2" alt="Polygon Logo"/>
                                </Link>
                            </span>
                            <h1 className="font-semibold text-white text-3xl mt-2">1001.203<sub className="text-gray-400 ml-1 text-xs">BNB/ECL</sub></h1>
                            <small id="rate" className="text-xs">+0.333(+0.72%)</small>
                        </span>
                        <div className="mt-3 md:mt-0">
                            <span className="rounded-lg h-fit w-fit flex border-2 border-gray-600 text-white time_bg">
                                <Link className="rounded-lg py-2.5 px-3.5 text-xs font-semibold active_time" to='/'>24H</Link>
                                <Link className="rounded-lg py-2.5 px-3.5 text-xs font-semibold" to='/'>1W</Link>
                                <Link className="rounded-lg py-2.5 px-3.5 text-xs font-semibold" to='/'>1M</Link>
                                <Link className="rounded-lg py-2.5 px-3.5 text-xs font-semibold" to='/'>1Y</Link>
                            </span>
                            <p className="text-gray-200 text-xs mt-2 md:text-right text-left">Jun 16, 2022, 10:11PM</p>
                        </div>
                    </span>
                    <span className="p-4 rounded-lg border-2 border-gray-600 h-fit w-fit mt-3 md:mt-0" id="clip_bg">
                        <img src="/assets/clipboard.png" className="h-5" alt="Clipboard" />
                    </span>
                </div>
                <div id="chart" className="mt-5 bg-purple-300 h-64">

                </div>
            </div>
            {connectPage==='swap'? <Swap/>: connectPage==='limit' ? <Limits/>: connectPage==='liquidity' ? <Liquidity/> : connectPage==='wallet' ? <Wallet/> : connectPage==='transfers' ? <Transfers/> : connectPage==='balance' ? <Transfers/> :<Swap/>}
          </div>
        {connectPage==='limit'&&<Table/>}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage