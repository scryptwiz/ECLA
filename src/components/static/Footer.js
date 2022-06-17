import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t border-white w-full mt-20">
        <div className="w-4/5 py-8 flex md:flex-row flex-col justify-between items-center text-white mx-auto">
            <small>@2022. All Right Reserved</small>
            <div className="flex items-center gap-3 mt-3 md:mt-0">
                <Link to='/'><img src="/assets/telegram.png" className="h-5" alt="Telegram"/></Link>
                <Link to='/'><img src="/assets/twitter.png" className="h-5" alt="Twitter"/></Link>
                <Link to='/'><img src="/assets/Vector.png" className="h-5" alt="Dont Know"/></Link>
                <Link to='/'><img src="/assets/linkedin.png" className="h-5" alt="LinkedIn"/></Link>
                <Link to='/'><img src="/assets/reddit.png" className="h-5" alt="Reddit"/></Link>
                <Link to='/'><img src="/assets/discord.png" className="h-5" alt="Discord"/></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer