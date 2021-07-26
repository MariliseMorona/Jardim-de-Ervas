import React, { useContext } from 'react';
import {ProductsContext} from './ProductsContext';
import {CartContext} from './CartContext';


const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  return (
    <>
      <div className="products" style={{ marginTop: '30px' }}>
        {products.map(product => (
          <div className="product" key={product.id}>
            <div className="pro">
              <div className="productImage">
                <img src={product.image} alt="Not found" />
              </div>
              <div className="productDetails">
                <div className="proName">
                  <h4>{product.name}</h4>
                </div>
                <div className="proPrice">
                  ${product.price}.00
                </div>
              </div>
              <div className="proButton" onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, products })}>
                <button className="buyNow" >Comprar</button>
              </div>
            </div>
          </div>
        ))}

      </div>

    </>
  )

}

export default Products;