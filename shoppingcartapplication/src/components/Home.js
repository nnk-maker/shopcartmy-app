import React from 'react'
import { CartState } from '../context/Context';

const Home = () => {
    const { state: { products } } = CartState();
    console.log(products);
  return (
    <div className="home">
      {/* <Filters /> */}
      <div className="productContainer">
        {products.map((prod) => {
          return <spam>{prod.name}</spam> 
        
        })}
      </div>
    </div>
  )
};

export default Home;