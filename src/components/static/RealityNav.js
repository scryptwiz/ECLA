const RealityNav = () => {
  return (
    <nav className="flex justify-between items-center">
        <img src="/assets/realityLogo.png" className="h-8 sm:h-fit" alt="ECLA LOGO" />
        <ul className="lg:flex hidden items-center gap-9">
            <li>
                <p className="text-gray-700 flex items-center text-sm tracking-wide font-medium">
                    Developer
                    <span><img src="/assets/darkdownchevron.png" className=" ml-2" alt="downarrow"/></span>
                </p>
            </li>
            <li>
                <p className="text-gray-700 flex items-center text-sm tracking-wide font-medium">
                    Ecosystem
                    <span><img src="/assets/darkdownchevron.png" className=" ml-2" alt="downarrow"/></span>
                </p>
            </li>
            <li>
                <p className="text-gray-700 flex items-center text-sm tracking-wide font-medium">
                    Community
                    <span><img src="/assets/darkdownchevron.png" className=" ml-2" alt="downarrow"/></span>
                </p>
            </li>
            <li>
                <p className="text-gray-700 flex items-center text-sm tracking-wide font-medium">
                    Learn
                    <span><img src="/assets/darkdownchevron.png" className=" ml-2" alt="downarrow"/></span>
                </p>
            </li>
        </ul>
        <button className="lg:hidden block"><img src="/assets/darkMenubar.png" className="h-10" alt="Menubar"/></button>
    </nav>
  )
}

export default RealityNav