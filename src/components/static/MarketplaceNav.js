import { Link } from "react-router-dom"

const MarketplaceNav = () => {
  return (
    <nav className="flex justify-between">
        <img src="/assets/logo.png" alt="ECLA LOGO" />
        <ul className="lg:flex hidden items-center gap-9">
            <li>
                <Link to='/' className="text-white text-sm tracking-wide font-medium underline">Home</Link>
            </li>
            <li>
                <Link to='/' className="text-white text-sm tracking-wide font-medium">Explore</Link>
            </li>
            <li>
                <Link to='/' className="text-white text-sm tracking-wide font-medium">Developer</Link>
            </li>
        </ul>
        <ul className="lg:flex hidden items-center gap-4">
            <button className="border border-gray-100 rounded px-5 py-2 text-xs text-white">Create</button>
            <button className="px-5 py-2 text-xs text-white">Sign In</button>
        </ul>
        <button className="lg:hidden block"><img src="/assets/menubar.png" className="h-10" alt="Menubar"/></button>
    </nav>
  )
}

export default MarketplaceNav