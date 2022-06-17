import RealityNav from "../static/RealityNav"

const EclaReality = () => {
  return (
    <div className="w-full bg-white">
        <div className="w-full pt-10 pb-32 h-screen man_image">
            <div className="w-10/12 flex h-full flex-col justify-between  mx-auto">
                <RealityNav />
                <span>
                    <h1 className="font-bold text-5xl tracking-widest reality_header_title">WELCOME TO <br/> REAL-GINATION.</h1>
                    <p className="reality_header_title text-sm mt-7">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                    <button className="get_started px-10 py-2.5 text-white mt-9">Get Started</button>
                </span>
            </div>
        </div>
        <div className="w-full py-10 h-screen space">
            <div className="w-10/12 flex h-full flex-col justify-between  mx-auto">
                <span className="my-auto text-white">
                    <h1 className="font-bold text-7xl capitalize">Travel.</h1>
                    <h1 className="font-bold text-3xl mt-7">Begin a visit to <br/> your imagination</h1>
                    <p className="text-sm mt-7">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                    <button className="get_started px-16 py-2.5 text-white mt-7">Explore</button>
                </span>
            </div>
        </div>
        <div className="w-full py-10 h-screen create">
            <div className="w-10/12 flex h-full justify-between  mx-auto">
                <span className="my-auto text-white flex justify-between items-center w-full">
                    <span>
                        <h1 className="font-bold text-7xl capitalize">Create.</h1>
                        <h1 className="font-bold text-3xl mt-7 reality_header_title">Bring your own <br/> world to reality</h1>
                        <p className="text-sm mt-7 reality_header_title">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                        <button className="get_started px-16 py-2.5 text-white mt-7">Start Creating</button>
                    </span>
                    <span>
                        <img src="/assets/spiral2.png" className="h-30" alt="spiral"/>
                    </span>
                </span>
            </div>
        </div>
        <div className="w-full py-10 h-screen bg-gray-800">
            <div className="w-10/12 flex h-full justify-between  mx-auto">
                <span className="my-auto text-white flex justify-between items-center w-full">
                <div className="mt-20 mb-20 w-9/12 mx-auto rounded-lg start_bg">
                        <div className="w-full mx-auto flex justify-between items-center pr-20">
                            <div className="flex justify-center items-center">
                                <img src="/assets/ecla.png" className="h-40" alt="BBE Logo" />
                                <img src="/assets/eclacommunity.png" className="h-10" alt="ECLA Community Logo"/>
                            </div>
                            <button className="py-2.5 px-7 border border-white rounded-full text-white font-semibold">Become a member</button>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </div>
  )
}

export default EclaReality