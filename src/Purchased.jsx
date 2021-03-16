import moment from 'moment'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from './CheckoutProduct'
import './Purchased.css'


function Purchased({order}) {

    return (
        <div className="purchased">
            <h2>Orders</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

            <p className="purchased__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item=>(
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
            />
            ))}
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <h4 className="purchased__total">Order Total: </h4>
                    <h3 className="purchased__total">{value}</h3>
                    </>
                    )}
                    decimalScale={2}
                    value={order.data.amount /100}
                    displayType={"text"}
                    thousandSeprator={true}
                    prefix={"Rs."}
            /> 

        </div>
    )
}

export default Purchased
