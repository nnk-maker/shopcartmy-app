import React, { createContext, useContext, useReducer, useEffect } from 'react';
//import faker from "faker";
import { faker } from '@faker-js/faker';
//import { cartReducer, productReducer } from './Reducers';
import { cartReducer } from './Reducers';

const Cart = createContext();
faker.seed(5);
//Newly added code
const Context = ({ children }) => {

    //products == roberts
    const products = [...Array(5)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.transport(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
      }));
      console.log("in function- Context");
      console.log(products);
      //const cartFromLocalStorage = JSON.parse(localStorage.getItem('Cart') || '[]');

      const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [], 
      });

      

      /* const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      }); */


  return (
    (
        <Cart.Provider value={{ state, dispatch}}>
          {children}
        </Cart.Provider>
      )
  )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
  };