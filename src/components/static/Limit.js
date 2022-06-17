import { Link } from "react-router-dom"

const Limits = () => {
  return (
    <div className="inner_bg mx-auto lg:w-10/12 w-11/12  mt-10 flex lg:flex-col flex-col justify-between p-5 rounded">
        <div className="flex lg:flex-row flex-col justify-between rounded">
            <div className="lg:w-4/6 w-full md:p-5">
                <div className="flex flex-col md:flex-row justify-between">
                    <span className="flex justify-between md:flex-row flex-col w-10/12">
                        <span>
                            <span className="flex items-center">
                                <img src="/assets/belogo.png" className="h-7" alt="Binance And ECLA LOGO"/>
                                <img src="/assets/exchange.png" className="h-5 ml-2" alt=""/>
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
                <button className="connect_btn lg:mt-3 mt-10 py-3 text-white">Connect Wallet</button>
            </div>
        </div>
        <div className="mt-5 border-t border-gray-600 w-full text-white flex">
            <Link to='/' className="bg-transparent font-medium w-1/2 py-2 px-3 text-center">Open Orders</Link>
            <Link to='/' className="bg-gray-700 font-medium w-1/2 py-2 px-3 text-center">Order History</Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-white uppercase bg-transpatent border-b border-gray-500">
                    <tr>
                        <th className="px-6 py-3">From</th>
                        <th className="px-6 py-3">To</th>
                        <th className="px-6 py-3">Limit Price</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-transparent text-white">
                        <th className="px-6 py-4">1232233</th>
                        <td className="px-6 py-4">1112323</td>
                        <td className="px-6 py-4">1000</td>
                        <td className="px-6 py-4">True</td>
                    </tr>
                    <tr className="bg-transparent text-white">
                        <th className="px-6 py-4">1232233</th>
                        <td className="px-6 py-4">1112323</td>
                        <td className="px-6 py-4">1000</td>
                        <td className="px-6 py-4">True</td>
                    </tr>
                    <tr className="bg-transparent text-white">
                        <th className="px-6 py-4">1232233</th>
                        <td className="px-6 py-4">1112323</td>
                        <td className="px-6 py-4">1000</td>
                        <td className="px-6 py-4">True</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Limits