import { Link } from "react-router-dom"

const DarkFooter = () => {
  return (
    <footer className="bg-white w-full">
        <div className="w-4/5 py-8 flex md:flex-row flex-col justify-between items-center text-gray-500 mx-auto">
            <small>@2022. All Right Reserved</small>
            <div className="flex items-center gap-3 mt-3 md:mt-0">
                <Link to='/'><img src="/assets/icons/darkTelegram.png" className="h-5" alt="Telegram"/></Link>
                <Link to='/'><img src="/assets/icons/darkTwitter.png" className="h-5" alt="Twitter"/></Link>
                <Link to='/'><img src="/assets/icons/darkVector.png" className="h-5" alt="Dont Know"/></Link>
                <Link to='/'><img src="/assets/icons/darkLinkedin.png" className="h-5" alt="LinkedIn"/></Link>
                <Link to='/'><img src="/assets/icons/darkReddit.png" className="h-5" alt="Reddit"/></Link>
                <Link to='/'><img src="/assets/icons/darkDiscord.png" className="h-5" alt="Discord"/></Link>
            </div>
        </div>
    </footer>
  )
}

export default DarkFooter