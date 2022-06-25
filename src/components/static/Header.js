import { useState, Fragment } from "react";
import { Link } from "react-router-dom"
import { Menu, Transition } from '@headlessui/react'
const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menubarOn = () => {
        setToggle(true);
    }
    const menubarOff = () => {
        setToggle(false)
    }
  return (
    <nav className={`flex justify-between`}>
        <div className="flex items-center gap-10">
            <img src="/assets/logo.png" alt="ECLA LOGO" />
            <ul className="lg:flex hidden items-center gap-3">
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Developer <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-top-left absolute left-0 dropdown_content focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Resources</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Getting Started</strong><br/>Developer resources</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>NFTs</strong><br/>Mint, sell and trade NFTs at scale</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>DEFI</strong><br/>Low fees.Low latency.Capital efficiency</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Gaming</strong><br/>Web3 games, Web2 speeds</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Payments</strong><br/>Decentralized payments at scale</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>DAOS</strong><br/>Governance that just works</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Learning</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>EClA cookbook</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLADev</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Docs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Metaplex Docs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Careers</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>See available positions</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Guides & Tutorials</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Figment Learn</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Questionable x superteam</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into to Building ECLA Programs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into To Anchor Framework</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>A Guide to Full Stack Development on ECLA</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into to ECLA Blockchain Concepts</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Network <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-top-left absolute left-0 dropdown_content focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Inspect</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Eclascan</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Explore</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLAbeach</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake Distribution</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Status</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Network Status</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Email Alerts</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Interact</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Environment</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>RPC Providers</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <li>
                    <Link to='/swap' className="text-white text-sm tracking-wide font-medium">Ecosystem</Link>
                </li>
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Community <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-top-left absolute left-0 dropdown_content focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Community</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Home</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Events</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Breakpoint</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Branding</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Collective</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>Join the collective</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Content</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>News</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Prodcast</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Youtube</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Newsletter</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Socials</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Twitter</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Discord</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Reddit</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Telegram</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                {/* <Link to='/eclaecosystem' className="text-white px-8 py-1.5 connect_btn">Connect</Link> */}
            </ul>
        </div>
        <div className="flex justify-center items-center lg:flex hidden">
            <button className="text-white font-semibold text-sm cursor-pointer">Authenticate</button>
        </div>
        {toggle?<div className="w-full h-screen fixed top-0 left-0 flex lg:hidden">
            <ul className="h-screen w-9/12 py-20 bg-gray-900 bg-opacity-90 flex flex-col gap-9 overflow-y-auto">
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Developer <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-full focus:outline-none flex justify-between py-5 flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Resources</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Getting Started</strong><br/>Developer resources</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>NFTs</strong><br/>Mint, sell and trade NFTs at scale</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>DEFI</strong><br/>Low fees.Low latency.Capital efficiency</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Gaming</strong><br/>Web3 games, Web2 speeds</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Payments</strong><br/>Decentralized payments at scale</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>DAOS</strong><br/>Governance that just works</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Learning</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA cookbook</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLADev</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Docs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Metaplex Docs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Careers</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>See available positions</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 mt-5 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Guides & Tutorials</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Figment Learn</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Questionable x superteam</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into to Building ECLA Programs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into To Anchor Framework</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>A Guide to Full Stack Development on ECLA</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into to ECLA Blockchain Concepts</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Network <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-full focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Inspect</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Eclascan</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Explore</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLAbeach</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake Distribution</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Status</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Network Status</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Email Alerts</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Interact</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Environment</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>RPC Providers</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <li>
                    <Link to='/swap' className="text-white text-sm tracking-wide font-medium px-4">Ecosystem</Link>
                </li>
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Community <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-ful focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Community</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Home</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Events</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Breakpoint</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Branding</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Collective</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>Join the collective</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Content</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>News</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Prodcast</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Youtube</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Newsletter</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Socials</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Twitter</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Discord</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Reddit</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Telegram</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <li>
                    <button className="text-white font-semibold text-sm cursor-pointer px-4">Authenticate</button>
                </li>
            </ul>
            <button className="h-screen w-3/12 flex py-10" onClick={menubarOff}>
                <button onClick={menubarOff} className="absolute right-5">
                    <img src="/assets/icons/close.png" className="h-10" alt="Menubar"/>
                </button>
            </button>
        </div> : <button className="lg:hidden block" onClick={menubarOn}>
          <img src="/assets/icons/menubar.png" className="h-10" alt="Menubar"/>
        </button>}
    </nav>
  )
}
export default Header