import React, { useEffect, useState } from 'react'
import { useDataLayerValue } from './DataLayer';
import { db } from './firebase';
import './Orders.css';
import Purchased from './Purchased';


function Orders() {
    const [{user}] = useDataLayerValue();
    const [orders,setOrders] =useState([])
    useEffect(()=>{
        if(user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snap =>(
                setOrders(snap.docs.map(doc =>({
                    id:doc.id,
                    data:doc.data()
                })))
            ))
        }else{
            setOrders([]);
        }
        
    },[user])
    return (
        <div className="orders">
            <h1>Here's what you ordered</h1>
            <div className="orders__order">
                {orders?.map(order=>(
                    <Purchased  order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders
