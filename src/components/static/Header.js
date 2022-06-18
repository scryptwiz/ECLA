import { Link } from "react-router-dom"

const Header = () => {
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
                <Link to='/eclareality' className="text-white text-sm tracking-wide font-medium">Developer</Link>
            </li>
            <li>
                <Link to='/eclamarket' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Learn
                    <span><img src="/assets/downchevron.png" className=" ml-2" alt="downarrow"/></span>
                </Link>
            </li>
            <Link to='/eclaecosystem' className="text-white px-8 py-1.5 connect_btn">Connect</Link>
        </ul>
        <button className="lg:hidden block"><img src="/assets/menubar.png" className="h-10" alt="Menubar"/></button>
    </nav>
  )
}

export default Header