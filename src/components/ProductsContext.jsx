import React, { useState, createContext, useReducer } from 'react';
import {ProductReducer} from "./ProductReducer"
import featureimage from '../assets/img/berrys.png';
import featureimage1 from '../assets/img/relax.png';
import featureimage2 from '../assets/img/citric.png';

export const ProductsContext = createContext();

 const ProductsContextProvider = (props) => {

     const [products] = useReducer(ProductReducer, [
       {id: 1, name: "Kit Berrys", price: 300, image: featureimage},
       {id: 2, name: "Kit Relax", price: 150, image: featureimage1},
       {id: 3, name: "Kit Citrus", price: 450, image: featureimage2},
     ])
     return(
       <ProductsContext.Provider value = {{products}}>
       {props.children}
       </ProductsContext.Provider>
     )
   

 }   
export default ProductsContextProvider;