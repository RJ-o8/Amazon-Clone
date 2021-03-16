import React from 'react'
import './CheckoutProduct.css'
import { useDataLayerValue } from './DataLayer'

function CheckoutProduct({id, price,image,rating,title,hideButton}) {

    const[{basket},dispatch] =useDataLayerValue();

    const removeFBasket = ()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id :id
        })
    }

    return (
        <div className="checkoutProduct">
                <img className="checkoutProduct__image" src={image} alt=""/>
            
            <div className="checkoutProduct__info">
                
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price" >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map(()=>(
                            <p>⭐</p>
                        ))
                    }
                </div>
                {!hideButton && (
                <button  onClick={removeFBasket}>Remove from Basket</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct;
