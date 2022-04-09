
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AddressValidation from './components/AddressValidation';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import { Success } from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <Header />

          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />    
              
              <Route path="/cart" element={<Cart />} />        

              <Route path="/validation" element={<AddressValidation />} />        

              <Route path="/success" element={<Success />} />    
            </Routes> 
          </div>
        
      
    </BrowserRouter>
  );
}

export default App;
