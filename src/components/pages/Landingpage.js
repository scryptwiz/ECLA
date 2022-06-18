import Helmet from "react-helmet"
import Header from "../static/Header"

const Landingpage = () => {
  return (
    <>
    <div className="main_bg w-full px-20 mx-auto pt-10 spiral_bg">
        <Helmet>
          <title>ECLA Wallet</title>
        </Helmet>
        <Header/>
        <div className="mx-auto w-full h-screen flex items-center">
            <div className="flex mx-auto w-9/12 items-center justify-between">
                <span className="w-1/2">
                    <h1 className="text-white text-5xl font-semibold">Welcome <br/> Home to DeFi.</h1>
                    <p className="text-xs text-gray-300 mt-4">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                    <span className="flex mt-7 gap-5">
                        <button className="connect_btn px-7 py-2.5 text-white text-sm">Connect Wallet</button>
                        <button className="trade px-7 py-2.5 text-white text-sm">Trade</button>
                    </span>
                </span>
                <span className="w-1/2 justify-end items-center flex">
                    <img src="/assets/herologo.png" className="h-72" alt="ECLA Swap"/>
                </span>
            </div>
        </div>
        <div className="mt-7 w-fulll">
            <div className="w-4/5 mx-auto text-center justify-center flex-col items-center flex text-white">
                <h2 className="font-semibold text-3xl">Feel Comfortable</h2>
                <p className="mt-4 text-sm text-gray-300">Swap, earn, and build on the leading decentralized crypto trading protocol.</p>
                <span className="flex gap-20 justify-between mt-10">
                    <span className="flex flex-col justify-center items-center">
                        <h2 className="font-semibold text-3xl text_color">$500M+</h2>
                        <p className="text-xs mt-1 text_color">Trade Volume</p>
                    </span>
                    <span className="flex flex-col justify-center items-center">
                        <h2 className="font-semibold text-3xl">$72M+</h2>
                        <p className="text-xs mt-1 text-gray-300">All Time Traders</p>
                    </span>
                    <span className="flex flex-col justify-center items-center">
                        <h2 className="font-semibold text-3xl">$500+</h2>
                        <p className="text-xs mt-1 text-gray-300">Integrations</p>
                    </span>
                    <span className="flex flex-col justify-center items-center">
                        <h2 className="font-semibold text-3xl">$300M+</h2>
                        <p className="text-xs mt-1 text-gray-300">Community Delegates</p>
                    </span>
                </span>
            </div>
        </div>
        <div className="mt-20 w-full py-20 time_bg">
            <div className="w-4/5 mx-auto flex justity-between items-center">
                <span className="w-1/2">
                    <h1 className="text-3xl trade_title font-medium">Trade Seamlessly <br/> like you're home.</h1>
                    <p className="mt-3 text-gray-300 text-xs">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                    <span className="flex gap-10 items-center mt-6 text-white text-sm">
                        <button className="py-2.5 px-7 trade">Trade</button>
                        <button className="py-2.5 px-7 border border-white rounded-full">Connect Wallet</button>
                    </span>
                </span>
                <span className="w-1/2 flex justify-end">
                   <img src="/assets/bbelogo.png" className="h-60" alt="BBE Logo" />
                </span>
            </div>
        </div>
        <div className="mt-20 w-full py-20 time_bg">
            <div className="w-4/5 mx-auto flex justity-between items-center">
                <span className="w-1/2">
                    <h1 className="text-3xl trade_title font-medium">An evolving community <br/> for an evolving DeFi <br/> landscape</h1>
                    <p className="mt-3 text-gray-300 text-xs">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                    <span className="flex gap-10 items-center mt-6 text-white text-sm">
                        <button className="py-2.5 px-7 trade">Trade</button>
                        <button className="py-2.5 px-7 border border-white rounded-full">Connect Wallet</button>
                    </span>
                </span>
                <span className="w-1/2 flex justify-end">
                   <img src="/assets/ecla.png" className="h-60" alt="Ecla Logo" />
                </span>
            </div>
        </div>
        <div className="mt-20 mb-20 w-9/12 mx-auto py-10 rounded-lg start_bg">
            <div className="w-4/5 mx-auto flex justity-between items-center">
                <span className="w-1/2 flex justify-start">
                   <img src="/assets/grouplogo.png" className="h-40" alt="BBE Logo" />
                </span>
                <span className="w-1/2">
                    <h1 className="text-3xl trade_title font-medium">Start trading <br/> in seconds</h1>
                    <span className="flex gap-10 items-center mt-6 text-white text-sm">
                        <button className="py-2.5 px-7 border border-white rounded-full">Connect Wallet</button>
                    </span>
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landingpage