import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useDataLayerValue } from './DataLayer';
import './Payment.css'
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';


function Payment() {
    const [{user,basket},dispatch] =useDataLayerValue();
    const [error,setError] =useState(null);
    const [disabled,setDisabled] =useState(true);
    const [processing ,setProcessing] =useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setclientSecret] = useState(true);

    useEffect(()=>{
        const getClientSecret =  async ()=>{
            const response = await axios({
                method : 'post',
                //stripe expects the total in a currence subunits
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setclientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket]);

    console.log("THE SECRET IS :",clientSecret)

    const elements = useElements();
    const stripe = useStripe();
    const history = useHistory();
    const handelSubmit = async event =>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent })=>{
            //paymentIntent = payment confirmation 
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                })
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type:'EMPTY_BASKET',
            })
            history.replace('/orders')
        }) 
    }
    const handelChange = e =>{
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout ({<Link to="/checkout">{basket?.length} items</Link>})</h1>
                <div className="payment__section">
                    <div className="payment__title">
                            <h3>Delivery Address</h3>
                    </div>    
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Router Lane</p>
                        <p>Intel Firebase Express route</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Pay</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form action="" onSubmit={handelSubmit}>
                        <CardElement onChange={handelChange}/>
            
                            <div className="payment__pricecontainer">
                                <CurrencyFormat 
                                renderText={(value)=>(
                                    <>
                                        <h4>Order Total: {value}</h4>
                                    </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeprator={true}
                                    prefix={"$"}
                                    />    
                            <button disabled={ processing || disabled || succeeded }>
                                    <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;