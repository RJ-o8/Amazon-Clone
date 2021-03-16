import React from 'react'
import { useDataLayerValue } from './DataLayer';
import './Product.css';

function Product({id, title, price, rating, image}) {
    
    const [{basket},dispatch]= useDataLayerValue();

    const addToBasket = ()=>{
        console.log(basket)
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id,
                title,
                price,
                rating,
                image
            }
        })
    }

    return (
        <div className="product">
            <div className="product___info">
            <p>{title}</p>
            <p className="product__price" >
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map(()=>(
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
