import Helmet from "react-helmet"
import Footer from "../static/Footer"
import MarketplaceNav from "../static/MarketplaceNav"

const MarketPlace = () => {
  return (
      <>
        <div className="main_bg w-11/12 mx-auto pt-10">
            <Helmet>
            <title>ECLA MarketPlace</title>
            </Helmet>
            <MarketplaceNav/>
            <div className="h-full flex py-20 flex justify-between items-center">
                <span className="text-white w-1/2">
                    <h1 className="text-5xl font-semibold">Discover, collect, <br/> extraordinary NFT <br/> for real people</h1>
                    <p className="mt-7">In aenean posuere lorem risus nec. Tempor <br/> tincidunt aenean purus purus vestibulum nibh <br/>   mi venenatis</p>
                    <span className="flex gap-5 mt-7">
                        <button className="connect_btn px-10 py-2.5 text-white text-sm">Explore</button>
                        <button className="trade px-7 py-2.5 text-white text-sm">Create</button>
                    </span>
                </span>
                <span className="w-1/3 herro_card p-7 rounded-lg border border-purple-500">
                    <img src="/assets/liquidgrad.png" className="w-full" alt=""/>
                    <span className="justify-between flex mt-5">
                        <span className="flex items-center">
                            <span className="rounded-full w-10 h-10 bg-gray-400">d</span>  
                            <span className="text-white ml-2">
                                <h5 className="font-medium text-sm">Lagbaja</h5>
                                <p className="text-xs">0.21ecla</p>
                            </span>
                        </span>
                        <span className="text-white"> 
                            <h5 className="font-medium text-sm">WE ARE HERE</h5>
                            <p className="text-xs text-right">25</p>
                        </span>
                    </span>
                </span>
            </div>
            <div className="mt-10 w-11/12 mx-auto">
                <span className="flex justify-between items-center text-white">
                    <h3 className="font-semibold text-3xl">Hot auctions</h3>
                    <span>
                        <small className="flex items-center gap-2">view<img src="/assets/rightchevron.png" className="h-3" alt="Left Arrow"/></small>
                    </span>
                </span>
                <div className="flex gap-10 justify-between my-5">
                    <span className="w-1/5">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Lorem Ipsum</strong>
                            <strong className="text-xs">1.20 echo</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 01.34.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                    </span>
                    <span className="w-1/5">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Dolor sit amet</strong>
                            <strong className="text-xs">0.21 ecla</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 01.34.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                    </span>
                    <span className="w-1/5">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Dignissim curabitu..</strong>
                            <strong className="text-xs">0.01 ecla</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 56.44.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                    </span>
                    <span className="w-1/5">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Amet pellentesq..</strong>
                            <strong className="text-xs">0.55 echo</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 01.34.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-10 mt-32 text-white">
                    <h2 className="font-semibold text-3xl">Getting Started</h2>
                    <p className="text-sm mt-2">Eu, molestie commodo, enim pellentesque turpis integer sagittis</p>
                    <div className="py-10 w-9/12 flex justify-between items-center">
                        <div className="get_started py-3 h-32 w-8/12 absolute"></div>
                        <div className="flex flex-col items-center">
                            <div className="px-5 py-5 bg-gray-500 w-fit rounded-lg border border-gray-500 get_started_card">
                                <img src="/assets/verify.png" className="h-7" alt="verified"/>
                            </div>
                            <small className="text-xs mt-3 text-center">Connect your wallet</small>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="px-5 py-5 bg-gray-100 rounded-lg w-fit border border-gray-100 get_started_card">
                                <img src="/assets/archive.png" className="h-7" alt="verified"/>
                            </div>
                            <small className="text-xs mt-3 text-center">Posuere urna, sit amet <br/> molestie leo</small>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="px-5 py-5 bg-gray-100 rounded-lg w-fit border border-gray-100 get_started_card">
                                <img src="/assets/mail.png" className="h-7" alt="verified"/>
                            </div>
                            <small className="text-xs mt-3 text-center">Semper pretium <br/> libero sed quam <br/> ac integer ut</small>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="px-5 py-5 bg-gray-100 rounded-lg w-fit border border-gray-100 get_started_card">
                                <img src="/assets/Union.png" className="h-7" alt="verified"/>
                            </div>
                            <small className="text-xs mt-3 text-center">Lectus volutpat <br/> magna vitae in arcu</small>
                        </div>
                    </div>
                    <div className="w-10/12 mt-5">
                        <nav className="flex items-center justify-between">
                            <h2 className="text-3xl font-medium">Discover</h2>
                            <ul className="lg:flex hidden items-center gap-9">
                                <li>
                                    <p className="text-white flex items-center text-sm tracking-wide font-medium">
                                        Category
                                        <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-white flex items-center text-sm tracking-wide font-medium">
                                        Cheapest
                                        <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-white flex items-center text-sm tracking-wide font-medium">
                                        Newest
                                        <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                                    </p>
                                </li>
                                <button className="text-white px-8 py-1.5 rounded-lg filter_btn flex items-center"><img src='/assets/filter.png' alt="FilterIcon" className="h-4 mr-1"/>Fliter</button>
                            </ul>
                            <button className="lg:hidden block"><img src="/assets/menubar.png" className="h-10" alt="Menubar"/></button>
                        </nav>
                        <div className="flex gap-10 flex-wrap justify-between my-10">
                            <span className="w-1/5">
                                <div className="bg-gray-500 rounded-lg h-52"></div>
                                <span className="flex justify-between mt-5 items-center text-white">
                                    <strong className="text-xs">Lorem Ipsum</strong>
                                    <strong className="text-xs">1.20 echo</strong>
                                </span>
                                <hr className="my-2"/>
                                <span className="flex justify-between mt-3 items-center text-white">
                                    <small className="text-xs">End in 01.34.45</small>
                                    <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                                </span>
                            </span>
                            <span className="w-1/5">
                                <div className="bg-gray-500 rounded-lg h-52"></div>
                                <span className="flex justify-between mt-5 items-center text-white">
                                    <strong className="text-xs">Dolor sit amet</strong>
                                    <strong className="text-xs">0.21 ecla</strong>
                                </span>
                                <hr className="my-2"/>
                                <span className="flex justify-between mt-3 items-center text-white">
                                    <small className="text-xs">End in 01.34.45</small>
                                    <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                                </span>
                            </span>
                            <span className="w-1/5">
                                <div className="bg-gray-500 rounded-lg h-52"></div>
                                <span className="flex justify-between mt-5 items-center text-white">
                                    <strong className="text-xs">Dignissim curabitu..</strong>
                                    <strong className="text-xs">0.01 ecla</strong>
                                </span>
                                <hr className="my-2"/>
                                <span className="flex justify-between mt-3 items-center text-white">
                                    <small className="text-xs">End in 56.44.45</small>
                                    <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                                </span>
                            </span>
                            <span className="w-1/5">
                                <div className="bg-gray-500 rounded-lg h-52"></div>
                                <span className="flex justify-between mt-5 items-center text-white">
                                    <strong className="text-xs">Amet pellentesq..</strong>
                                    <strong className="text-xs">0.55 echo</strong>
                                </span>
                                <hr className="my-2"/>
                                <span className="flex justify-between mt-3 items-center text-white">
                                    <small className="text-xs">End in 01.34.45</small>
                                    <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                                </span>
                            </span>
                            <span className="w-1/5">
                                <div className="bg-gray-500 rounded-lg h-52"></div>
                                <span className="flex justify-between mt-5 items-center text-white">
                                    <strong className="text-xs">Amet pellentesq..</strong>
                                    <strong className="text-xs">0.55 echo</strong>
                                </span>
                                <hr className="my-2"/>
                                <span className="flex justify-between mt-3 items-center text-white">
                                    <small className="text-xs">End in 01.34.45</small>
                                    <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                                </span>
                            </span>
                            <span className="w-1/5">
                                <div className="bg-gray-500 rounded-lg h-52"></div>
                                <span className="flex justify-between mt-5 items-center text-white">
                                    <strong className="text-xs">Amet pellentesq..</strong>
                                    <strong className="text-xs">0.55 echo</strong>
                                </span>
                                <hr className="my-2"/>
                                <span className="flex justify-between mt-3 items-center text-white">
                                    <small className="text-xs">End in 01.34.45</small>
                                    <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                                </span>
                            </span>
                            <span className="w-1/5">
                                <div className="bg-gray-500 rounded-lg h-52"></div>
                                <span className="flex justify-between mt-5 items-center text-white">
                                    <strong className="text-xs">Amet pellentesq..</strong>
                                    <strong className="text-xs">0.55 echo</strong>
                                </span>
                                <hr className="my-2"/>
                                <span className="flex justify-between mt-3 items-center text-white">
                                    <small className="text-xs">End in 01.34.45</small>
                                    <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                                </span>
                            </span>
                            <span className="w-1/5">
                                <div className="bg-gray-500 rounded-lg h-52"></div>
                                <span className="flex justify-between mt-5 items-center text-white">
                                    <strong className="text-xs">Amet pellentesq..</strong>
                                    <strong className="text-xs">0.55 echo</strong>
                                </span>
                                <hr className="my-2"/>
                                <span className="flex justify-between mt-3 items-center text-white">
                                    <small className="text-xs">End in 01.34.45</small>
                                    <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                                </span>
                            </span>
                        </div>
                        <div className="w-full my-10 flex">
                            <button className="border border-white rounded px-3 py-2 mx-auto mt-5">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 mb-32 w-9/12 mx-auto rounded-lg start_bg">
                <div className="w-full mx-auto flex justify-between items-center pr-20">
                    <div className="flex justify-center items-center">
                        <img src="/assets/ecla.png" className="h-40" alt="BBE Logo" />
                        <img src="/assets/eclacommunity.png" className="h-10" alt="ECLA Community Logo"/>
                    </div>
                    <button className="py-2.5 px-7 border border-white rounded-full text-white font-semibold">Become a member</button>
                </div>
            </div>
        </div>
        <Footer/>
      </>
  )
}

export default MarketPlace