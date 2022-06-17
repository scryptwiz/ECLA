import Helmet from "react-helmet"
import BlockChainNav from "../static/BlockChainNav"
import Footer from "../static/Footer"
const Eclablockchain = () => {
  return (
      <>
        <div className="main_bg w-11/12 mx-auto pt-10">
            <Helmet>
            <title>ECLA Wallet</title>
            </Helmet>
            <BlockChainNav/>
            <div className="flex flex-col text-center mt-24">
                <h1 className="text-6xl trade_title font-semibold">Strong. Fast. <br/> Precise.</h1>
                <p className="text-xs text-gray-300 mt-4">Decentralized blockchain built to enable scalable, <br/> user-friendly apps for the world.</p>
                <img src="/assets/eclalogo.png" className="h-64 w-fit mx-auto mt-20" alt="Ecla Logo"/>
                <h2 className="font-semibold text-white text-2xl mt-10">Blockchain Ecosystem <br/> for Real People</h2>
            </div>
            <div className="p-20 mt-16 flex justify-around mb-5 mx-auto w-10/12">
                <span className="px-5 py-10 blockchain_gradient_left border border-gray-500 h-96 rounded-lg">
                    <h1 className="trade_title text-4xl font-semibold">Unrivaled <br/> Speed</h1>
                    <p className="text-xs text-gray-300 mt-4">Swap, earn, and build on the leading <br/> decentralized  crypto trading protocol.</p>
                    <p className="text-white underline font-semibold mt-5">Learn</p>
                    <img src="/assets/blur.png" alt='Blur' className="h-32 mt-5 absolute left-5 blur_img mix-blend-hue"/>
                </span>
                <span className="px-5 py-10 blockchain_gradient_right border border-gray-500 h-96 rounded-lg">
                    <h1 className="trade_title text-4xl font-semibold">Unrivaled <br/> Speed</h1>
                    <p className="text-xs text-gray-300 mt-4">Swap, earn, and build on the leading <br/> decentralized  crypto trading protocol.</p>
                    <p className="text-white underline font-semibold mt-5">Learn</p>
                    <img src="/assets/blur.png" alt='blur' className="h-32 mt-5 absolute right-5 blur_img mix-blend-hue"/>
                </span>
            </div>
            <div className="flex justify-center items-center">
                <span className="circles h-72 flex flex-col justify-center items-center w-80">
                    <h1 className="text-xl text-center text-white mt-5">Explore to Get <br/> more out of the <br/> ecosystem</h1>
                    <p className="explore_gradient underline text-sm mt-5">Explore</p>
                </span>
            </div>
            <div className="w-full py-20 time_bg">
                <div className="w-4/5 mx-auto flex justity-between items-center">
                    <span className="w-1/2">
                        <h1 className="text-3xl trade_title font-medium">Join a new <br/> world of swift <br/> services</h1>
                        <p className="mt-3 text-gray-300 text-xs">Lörem ipsum os enunde polyck. Hypolingar <br/> ninera i sur, tidese. Makroder gigasm eung <br/> nynera asejäling, defol. Nelig speskade fast</p>
                        <p className="text-2xl text-white underline mt-5 trade_title">Learn</p>
                    </span>
                    <span className="w-1/2 flex justify-end">
                    <img src="/assets/spiral.png" className="h-60" alt="spiral" />
                    </span>
                </div>
            </div>
            <div className="mt-20 mb-20 w-9/12 mx-auto rounded-lg start_bg">
                <div className="w-full mx-auto flex justify-between items-center pr-20">
                    <div className="flex justify-center items-center">
                        <img src="/assets/ecla.png" className="h-40" alt="BBE Logo" />
                        <img src="/assets/eclacommunity.png" className="h-10" alt="ECLA Community Logo"/>
                    </div>
                    <button className="py-2.5 px-7 border border-white rounded-full text-white font-semibold">Connect Wallet</button>
                </div>
            </div>
        </div>
        <Footer/>
      </>
  )
}

export default Eclablockchain