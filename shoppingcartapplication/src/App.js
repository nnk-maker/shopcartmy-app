
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';

import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import PurchaseValidation from './components/PurchaseValidation';
import { Success } from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <Header />

          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />    
              
              <Route path="/cart" element={<Cart />} />        

              <Route path="/validation" element={<PurchaseValidation />} />        

              <Route path="/success" element={<Success />} />    
            </Routes> 
          </div>
        
      
    </BrowserRouter>
  );
}

export default App;
