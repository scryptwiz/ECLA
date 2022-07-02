
const DarkFooter = () => {
  return (
    <footer className="bg-white w-full">
        <div className="w-4/5 py-8 flex md:flex-row flex-col justify-between items-center text-gray-500 mx-auto">
            <small>@2022. All Right Reserved</small>
            <div className="flex items-center gap-3 mt-3 md:mt-0">
                <a href='https://t.me/eclaecosystem'><img src="/assets/icons/darkTelegram.png" className="h-5" alt="Telegram"/></a>
                <a href='https://twitter.com/EclaEcosystem'><img src="/assets/icons/darkTwitter.png" className="h-5" alt="Twitter"/></a>
                <a href='https://eclaecosystem.medium.com/'><img src="/assets/icons/darkVector.png" className="h-5" alt="Medium"/></a>
                <a href='https://www.linkedin.com/in/ecla-ecosystem-8b5959235/'><img src="/assets/icons/darkLinkedin.png" className="h-5" alt="LinkedIn"/></a>
                <a href='https://reddit.com/r/eclaecosystem'><img src="/assets/icons/darkReddit.png" className="h-5" alt="Reddit"/></a>
                <a href='https://discord.gg/4YfWcEwkeG'><img src="/assets/icons/darkDiscord.png" className="h-5" alt="Discord"/></a>
            </div>
        </div>
    </footer>
  )
}

export default DarkFooter