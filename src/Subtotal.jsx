import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useDataLayerValue } from './DataLayer';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
function Subtotal() {
    const [{basket}] = useDataLayerValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            
            <CurrencyFormat 
            renderText={(value)=>(
            <>
                <p>
                        Total Basket Value ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                <input type="checkbox" name="" id=""/>This order contains a gift</small>
            </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeprator={true}
            prefix={"$"}
            />
            <button onClick={e=>history.push('/payment')}>Proceed to Pay</button>
        </div>
    )
}

export default Subtotal
