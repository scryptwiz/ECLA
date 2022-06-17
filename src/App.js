import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Eclablockchain from './components/pages/Eclablockchain';
import EclaEcosystem from './components/pages/EclaEcosystem';
import EclaReality from './components/pages/EclaReality';
import Landingpage from './components/pages/Landingpage';
import MarketPlace from './components/pages/MarketPlace';
import Swappage from './components/pages/Swappage';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/swap' element={<Swappage/>}></Route>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='/eclablockchain' element={<Eclablockchain/>}></Route>
        <Route path='/eclareality' element={<EclaReality/>}></Route>
        <Route path='/eclamarket' element={<MarketPlace/>}></Route>
        <Route path='/eclaecosystem' element={<EclaEcosystem/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}
export default App;