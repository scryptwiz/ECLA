import { useState } from "react";
import { Link } from "react-router-dom"
const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menubarOn = () => {
        setToggle(true);
    }
    const menubarOff = () => {
        setToggle(false)
    }
  return (
    <nav className="flex justify-between">
        <img src="/assets/logo.png" alt="ECLA LOGO" />
        <ul className="lg:flex hidden items-center gap-9">
            <li>
                <Link to='/swap' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Developer
                    <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                </Link>
            </li>
            <li>
                <Link to='/eclablockchain' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Ecosystem
                    <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                </Link>
            </li>
            <li>
                <Link to='/eclareality' className="text-white text-sm tracking-wide font-medium">Community</Link>
            </li>
            <li>
                <Link to='/eclamarket' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Learn
                    <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                </Link>
            </li>
            <Link to='/eclaecosystem' className="text-white px-8 py-1.5 connect_btn">Connect</Link>
        </ul>
        {toggle?<div className="w-full h-screen bg-transparent fixed top-0 left-0 flex lg:hidden">
            <ul className="h-screen w-9/12 py-32 px-5 bg-gray-900 bg-opacity-75 flex flex-col gap-9">
            <li>
                <Link to='/swap' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Developer
                    <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                </Link>
            </li>
            <li>
                <Link to='/eclablockchain' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Ecosystem
                    <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                </Link>
            </li>
            <li>
                <Link to='/eclareality' className="text-white text-sm tracking-wide font-medium">Community</Link>
            </li>
            <li>
                <Link to='/eclamarket' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Learn
                    <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                </Link>
            </li>
            <li>
                <Link to='/eclaecosystem' className="text-white px-8 py-1.5 connect_btn">Connect</Link>
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