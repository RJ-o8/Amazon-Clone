import React from 'react';
import {Link} from 'react-router-dom'
import {useDataLayerValue} from './DataLayer'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
const [{basket}] = useDataLayerValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add" src="https://tvlgiao.github.io/bc-sarahmarket-docs/img/home1-fullwidth-banner.jpg" alt=""/>
                {basket?.length === 0 ? (
                    <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <Link to="/">
                        <p>Continue Shoping</p>
                    </Link>
                    </div>
                ):(
                    <div>
                    <h2>Your Basket</h2>
                    
                    {
                        basket?.map(item =>(
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                    </div>
                )}
            </div>
            {basket?.length > 0 &&(
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
        
    )
}

export default Checkout;
