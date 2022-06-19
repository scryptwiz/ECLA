import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import DarkFooter from "../static/DarkFooter"
import Header from "../static/Header"

const EclaEcosystem = () => {
  return (
    <>
        <div className="bg-white">
        <Helmet>
            <title>Ecla Ecosystem</title>
        </Helmet>
          <div className="ecosys_hero h-screen py-10">
              <div className="w-11/12 mx-auto flex flex-col justify-between h-full">
                <Header/>
                <div className="h-4/6 w-full flex flex-col">
                  <h1 className="sm:text-5xl md:text-5xl md:w-3/5 w-full text-4xl font-bold text-white mx-auto text-center">Blockchain Ecosystem for Real People</h1>
                  <span className="flex md:gap-10 gap-5 mt-10 mx-auto flex-wrap items-center justify-center">
                    <button className="text-sm text-white connect_btn px-8 py-2">Roadmap</button>
                    <button className="text-sm px-8 py-2 bg-white whitepaper_btn">Road Whitepaper</button>
                    <img src="/assets/EcosysImages/eclaLogo3.png" className="h-24 md:h-32 absolute md:left-20 xl:left-52 left-5 bottom-0 ecla_logo_3" alt="Ecla Logo"/>
                    <img src="/assets/EcosysImages/eclipse.png" className="h-32 absolute md:right-20 right-0 bottom-0 md:bottom-1" alt="Eclipse"/>
                  </span>
                </div>
              </div>
          </div>
          <div className="mt-10 w-10/12 flex md:flex-row flex-col gap-10 py-10 mx-auto pt-20">
            <span className="md:w-3/12 flex md:flex-col overflow-x-auto w-full flex-row md:py-5 py-3 md:px-3 gap-5">
              <Link to='' className="active_eco whitespace-nowrap md:whitespace-normal">Introduction</Link>
              <Link to='' className="text-gray-600 text-sm whitespace-nowrap md:whitespace-normal">Sreetwalls NFT MArketplace</Link>
              <Link to='' className="text-gray-600 text-sm whitespace-nowrap md:whitespace-normal">Ecla Reality</Link>
              <Link to='' className="text-gray-600 text-sm whitespace-nowrap md:whitespace-normal">Suntwist Agro Investment Linklatform</Link>
              <Link to='' className="text-gray-600 text-sm whitespace-nowrap md:whitespace-normal">Prime Edifice Real Estate</Link>
              <Link to='' className="text-gray-600 text-sm whitespace-nowrap md:whitespace-normal">Stacking & Lunchpad</Link>
              <Link to='' className="text-gray-600 text-sm whitespace-nowrap md:whitespace-normal">Green Mail eCommerce</Link>
              <Link to='' className="text-gray-600 text-sm whitespace-nowrap md:whitespace-normal">Token</Link>
            </span>
            <span className="md:w-8/12 w-full">
              <div className="w-full flex md:flex-row flex-col items-center justify-between">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">Enhancing the development of different areas in the global economy.</h1>
                    <p className="text-xs text-gray-700 mt-5">The ECLA CHAIN is aimed at building a solid ground for agriculture, real estate and e-commerce; seeing that these are major industries in today’s world; hence our motto is Blockchainecosystem for real people.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="md:w-4/12 w-full md:mt-0 mt-5">
                    <img src="/assets/EcosysImages/building.png" className="md:h-full h-32 mx-auto" alt="Database"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">Streetwalls  NFT Marketplace</h1>
                    <p className="text-xs text-gray-700 mt-5">The first of its kind Marketplace for "Family-life themed" NFTs. Users will be able to access, buy, sell and mint NFTs using the $ECLA token deployed on the ECLA CHAIN.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="md:w-4/12 w-full md:mt-0 mt-5">
                    <img src="/assets/EcosysImages/slogo.png" className="md:h-full h-32 mx-auto" alt="DollarSign"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col">
                <span className="md:w-4/12 w-full md:mt-0 mb-5">
                    <img src="/assets/EcosysImages/bigleaves.png" className="md:h-full h-32 mx-auto" alt="Leaves"/>
                </span>
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">Ecla Reality</h1>
                    <p className="text-xs text-gray-700 mt-5">ECLA REALITY is a Virtual Reality (V.R) and Augmented Reality (AR) environment that is powered or run by the Metaverse. This environment is perceived through a device known as a Virtual Reality headset or helmet. </p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">SUNTWIST - Agro-based crypto investment platform</h1>
                    <p className="text-xs text-gray-700 mt-5">A desire to eat healthy combined with the widespread adoption of technology across all domains has resulted in agribusinesses searching for supply chain management software to improve food safety, food quality, and the traceability of the entire farming supply chain.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="md:w-4/12 w-full md:mt-0 mt-5">
                    <img src="/assets/EcosysImages/smallleaves.png" className="md:h-full h-32 mx-auto" alt="SmallLeaves"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">Prime Edifice Real Estate</h1>
                    <p className="text-xs text-gray-700 mt-5">According to the Reportlinker, the US real estate commercial real market is worth over $4.5 trillion, an indication that the industry is well thronged by investors globally. Understandably, the demand for housing both, residential and commercial will continue to rise.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="md:w-5/12 w-full md:mt-0 mt-5">
                    <img src="/assets/EcosysImages/buildings.png" className="md:h-full h-32 mx-auto" alt="Connections"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">Green Mall - E-commerce Platform</h1>
                    <p className="text-xs text-gray-700 mt-5">The E-commerce industry is controlled by big players like Amazon, eBay, Shopify. Despite the size of the industry, and the volume of transactions done daily, certain challenges have limited its further growth. One of them is high transactions for goods purchased by consumers.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="md:w-4/12 w-full md:mt-0 mt-5">
                    <img src="/assets/glogo.png" className="md:h-full h-32 mx-auto" alt="Connections"/>
                </span>
              </div>
            </span>
          </div>
          <div className="relative">
            <div className="h-10"></div>
            <div className="flex md:flex-row flex-col md:w-7/12 w-10/12 mx-auto rounded-xl items-center relative main_crypto_cont">
              <div className="sm:h-32 md:h-52 h-28 md:w-2/6 w-5/6 relative">
                <img src="/assets/EcosysImages/cryptoLogo.png" className="h-56 absolute cryto_logo" alt="Crypto Logo"/>
              </div>
              <span className="md:ml-10 md:w-4/6 w-5/6 text-white py-7 md:py-0">
                <h4 className="text-xl font-semibold">The ECLA Token (ECLA)</h4>
                <p className="text-xs mt-2 sm:w-4/5 w-full">It is an all-in-one interface to access the ECLA token economy. We are continuing to upgrade the ECLAWallet in order to support increasing composability and the seamless transfer of value across chains.</p>
                <Link to='/' className="underline text-xs mt-3">Read more</Link>
              </span>
            </div>
            <div className="archi py-28 flex flex-col justify-center items-center px-5">
              <img src="/assets/EcosysImages/structure.png" alt="Structure"/>
              <img src="/assets/EcosysImages/coinLogos.png" className="sm:h-7 h-5 mt-10" alt="Coin Logos"/>
            </div>
          </div>
        </div>
        <DarkFooter/>
    </>
  )
}

export default EclaEcosystem