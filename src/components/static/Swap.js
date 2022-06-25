const Swap = () => {
  return (
    <div className="lg:w-2/6 md:w-11/12 w-full mx-auto border-2 border-gray-600 rounded-xl flex flex-col justify-between lg:p-5 md:p-7 p-5 md:mt-0 mt-5" id="swap_bg">
        <div>
            <span className="flex justify-between itms-center">
                <h2 className="text-2xl font-bold text-white">Swap</h2>
                <span className="flex items-center">
                    <img src="/assets/settings.png" className="h-5" alt="Settings"/>
                    <img src="/assets/reload.png" className="h-5 ml-3" alt="Refresh"/>
                </span>
            </span>
            <hr className="mt-3 border-gray-600"/>
        </div>
        <div className="lg:mt-0 mt-5">
            <span className="flex items-center">
                <img src="/assets/bin.png" className="h-5" alt="Binance Logo"/>
                <strong className="text-xs text-white ml-1.5">BNB</strong>
                <img src="/assets/downchevron.png" className="h-3 ml-1.5" alt="Down Chevron" />
            </span>
            <input className="px-4 py-3 rounded-lg border border-gray-600 w-full mt-2.5 outline-none font-medium text-white inp_bg" />
        </div>
        <div className="lg:mt-0 mt-8">
            <img src="/assets/down.png" className="h-5 mx-auto" alt="Down Chevron" />
            <span className="flex items-center">
                <img src="/assets/ecl.png" className="h-5" alt="Binance Logo"/>
                <strong className="text-xs text-white ml-1.5">ECL</strong>
                <img src="/assets/downchevron.png" className="h-3 ml-1.5" alt="Down Chevron" />
            </span>
            <input className="px-4 py-3 rounded-lg border border-gray-600 w-full mt-2.5 outline-none font-medium text-white inp_bg" />
        </div>
        <button className="connect_btn lg:mt-3 mt-10 py-3 text-white">Swap</button>
    </div>
  )
}

export default Swap