import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import {useEffect, useState} from 'react';
const styles = {
    style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 310,
        bgcolor: 'white',
        p: 4,
    },
    select: {
        color: 'white',
    },
    modal: {
        margin: "20px auto",
        overflow: "auto",
    }
};
const Swap = () => {
    const [allCoins, setAllCoins] = useState([])
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res=>{
        setAllCoins(res.data)
      })
    }, [])
    
    const [topCurToken, setTopCurToken] = useState('')
    const [bottomCurToken, setBottomCurToken] = useState('')
    const [open, setOpen] = useState(false);
    const [bottomOpen, setBottomOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleBottomOpen = () => setBottomOpen(true);
    const handleBottomClose = () => setBottomOpen(false);
    const topToken = (tokenInfo) => {
        setOpen(false);
        setTopCurToken(tokenInfo);
    }
    const bottomToken = (tokenInfo) => {
        setBottomOpen(false);
        setBottomCurToken(tokenInfo);
    }
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
                <div>
                {topCurToken===''? <Button onClick={handleOpen} variant='text' size='small' sx={styles.select}>Select Token <svg className="w-3.5 h-3.5 ml-2 text-gray-100" fill="currentColor" viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></svg></Button>: <Button onClick={handleOpen} variant='text' size='small' sx={styles.select}><img className='w-8 h-8 rounded-full' src={topCurToken.image} alt='Coin Logo'/><span className='ml-5 font-semibold text-sm'>{topCurToken.symbol}</span><svg className="w-3.5 h-3.5 ml-3 text-gray-100" fill="currentColor" viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></svg></Button> }
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={styles.modal} >
                        <Box sx={styles.style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">Select A Token</Typography>
                        <hr />
                        {allCoins.map((items)=>{
                            return (
                                <Typography key={items.id} id="modal-modal-description" sx={{ mt: 2 }}><Button onClick={()=>topToken(items)} variant='text' size='small'><img className='w-10 h-10 rounded-full' src={items.image} alt='Coin Logo'/><span className='ml-2 flex flex-col gap-2 items-start'><p>{items.name}</p><p className='font-semibold'>{items.symbol}</p></span></Button></Typography>
                            )
                        })}
                        </Box>
                    </Modal>
                </div>
            </span>
            <input className="px-4 py-3 rounded-lg border border-gray-600 w-full mt-2.5 outline-none font-medium text-white inp_bg" />
        </div>
        <div className="lg:mt-0 mt-8">
            <img src="/assets/down.png" className="h-5 mx-auto" alt="Down Chevron" />
            <span className="flex items-center">
            <div>
                {bottomCurToken===''? <Button onClick={handleBottomOpen} variant='text' size='small' sx={styles.select}>Select Token <svg className="w-3.5 h-3.5 ml-2 text-gray-100" fill="currentColor" viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></svg></Button>: <Button onClick={handleBottomOpen} variant='text' size='small' sx={styles.select}><img className='w-8 h-8 rounded-full' src={bottomCurToken.image} alt='Coin Logo'/><span className='ml-5 font-semibold text-sm'>{bottomCurToken.symbol}</span><svg className="w-3.5 h-3.5 ml-3 text-gray-100" fill="currentColor" viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></svg></Button> }
                    <Modal open={bottomOpen} onClose={handleBottomClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={styles.modal} >
                        <Box sx={styles.style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">Select A Token</Typography>
                        <hr />
                        {allCoins.map((items)=>{
                            return (
                                <Typography key={items.id} id="modal-modal-description" sx={{ mt: 2 }}><Button onClick={()=>bottomToken(items)} variant='text' size='small'><img className='w-10 h-10 rounded-full' src={items.image} alt='Coin Logo'/><span className='ml-2 flex flex-col gap-2 items-start'><p>{items.name}</p><p className='font-semibold'>{items.symbol}</p></span></Button></Typography>
                            )
                        })}
                        </Box>
                    </Modal>
                </div>
            </span>
            <input className="px-4 py-3 rounded-lg border border-gray-600 w-full mt-2.5 outline-none font-medium text-white inp_bg" />
        </div>
        <button className="connect_btn lg:mt-3 mt-10 py-3 text-white">Swap</button>
    </div>
  )
}

export default Swap