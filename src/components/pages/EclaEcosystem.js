import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import Footer from "../static/Footer"
import Header from "../static/Header"

const EclaEcosystem = () => {
  return (
    <>
        <div className="bg-white">
        <Helmet>
            <title>Ecla Ecosystem</title>
        </Helmet>
          <div className="ecosys_hero h-screen bg-white py-10">
              <div className="w-11/12 mx-auto flex flex-col justify-between h-full">
                <Header/>
                <div className="h-4/6 w-full flex flex-col">
                  <h1 className="text-6xl font-bold text-white  mx-auto text-center">Blockchain Ecosystem <br/> for Real People</h1>
                  <span className="flex gap-10 mt-10 mx-auto">
                    <button className="text-sm text-white connect_btn ">Roadmap</button>
                    <button className="text-sm px-8 py-2 bg-white whitepaper_btn">Road Whitepaper</button>
                    <img src="/assets/eclaLogo3.png" className="h-32 absolute left-52 bottom-0 ecla_logo_3" alt="Ecla Logo"/>
                    <img src="/assets/eclipse.png" className="h-32 absolute right-20 bottom-1" alt="Eclipse"/>
                  </span>
                </div>
              </div>
          </div>
          <div className="mt-10 w-10/12 flex gap-10 py-10 mx-auto pt-20">
            <span className="w-3/12 flex flex-col py-5 px-3 gap-5">
              <Link to='' className="active_eco">Introduction</Link>
              <Link to='' className="text-gray-600 text-sm">Sreetwalls NFT MArketplace</Link>
              <Link to='' className="text-gray-600 text-sm">Ecla Reality</Link>
              <Link to='' className="text-gray-600 text-sm">Suntwist Agro Investment Linklatform</Link>
              <Link to='' className="text-gray-600 text-sm">Prime Edifice Real Estate</Link>
              <Link to='' className="text-gray-600 text-sm">Stacking & Lunchpad</Link>
              <Link to='' className="text-gray-600 text-sm">Green Mail eCommerce</Link>
              <Link to='' className="text-gray-600 text-sm">Token</Link>
            </span>
            <span className="w-8/12">
              <div className="w-full flex items-center justify-between">
                <span className="w-6/12">
                    <h1 className="text-xl font-semibold ecosysTitles">Enhancing the development of different areas in the global economy.</h1>
                    <p className="text-xs text-gray-700 mt-5">The ECLA CHAIN is aimed at building a solid ground for agriculture, real estate and e-commerce; seeing that these are major industries in today’s world; hence our motto is Blockchainecosystem for real people.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="w-4/12">
                    <img src="/assets/building.png" className="h-full" alt="Database"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10">
                <span className="w-6/12">
                    <h1 className="text-xl font-semibold ecosysTitles">Streetwalls  NFT Marketplace</h1>
                    <p className="text-xs text-gray-700 mt-5">The first of its kind Marketplace for "Family-life themed" NFTs. Users will be able to access, buy, sell and mint NFTs using the $ECLA token deployed on the ECLA CHAIN.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="w-4/12">
                    <img src="/assets/slogo.png" className="h-full" alt="DollarSign"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10">
                <span className="w-4/12">
                    <img src="/assets/bigleaves.png" className="h-full" alt="Leaves"/>
                </span>
                <span className="w-6/12">
                    <h1 className="text-xl font-semibold ecosysTitles">Ecla Reality</h1>
                    <p className="text-xs text-gray-700 mt-5">ECLA REALITY is a Virtual Reality (V.R) and Augmented Reality (AR) environment that is powered or run by the Metaverse. This environment is perceived through a device known as a Virtual Reality headset or helmet. </p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10">
                <span className="w-6/12">
                    <h1 className="text-xl font-semibold ecosysTitles">SUNTWIST - Agro-based crypto investment platform</h1>
                    <p className="text-xs text-gray-700 mt-5">A desire to eat healthy combined with the widespread adoption of technology across all domains has resulted in agribusinesses searching for supply chain management software to improve food safety, food quality, and the traceability of the entire farming supply chain.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="w-4/12">
                    <img src="/assets/smallleaves.png" className="h-full" alt="SmallLeaves"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10">
                <span className="w-6/12">
                    <h1 className="text-xl font-semibold ecosysTitles">Prime Edifice Real Estate</h1>
                    <p className="text-xs text-gray-700 mt-5">According to the Reportlinker, the US real estate commercial real market is worth over $4.5 trillion, an indication that the industry is well thronged by investors globally. Understandably, the demand for housing both, residential and commercial will continue to rise.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="w-5/12">
                    <img src="/assets/buildings.png" className="h-full" alt="Connections"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10">
                <span className="w-6/12">
                    <h1 className="text-xl font-semibold ecosysTitles">Green Mall - E-commerce Platform</h1>
                    <p className="text-xs text-gray-700 mt-5">The E-commerce industry is controlled by big players like Amazon, eBay, Shopify. Despite the size of the industry, and the volume of transactions done daily, certain challenges have limited its further growth. One of them is high transactions for goods purchased by consumers.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="w-4/12">
                    <img src="/assets/glogo.png" className="h-full" alt="Connections"/>
                </span>
              </div>
            </span>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default EclaEcosystem