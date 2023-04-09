import React from 'react';
import toast from "react-hot-toast";
import {useDispatch} from "react-redux"
import productList from './pComponent/productList';
import ProductCard from './pComponent/ProductCard';


const Products = () => {

  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    console.log(options)
    dispatch({type:"addToCart",payload:options});
    dispatch({ type: "calculatePrice"});
    toast.success("Added to Cart");
  };
  return (
    <div id="products">
       {
        productList.map((i) => (
           <ProductCard 
             key={i.id}
             imgSrc={i.imgSrc}
             name={i.name}
             price={i.price}
             id={i.id}
             handler={addToCartHandler}
           />
        ))
       }
    </div>
  )
}

export default Products;