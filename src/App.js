import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import './App.css';
import Header from "./HomePage/Header";
import Home from './HomePage/Home';
import Login from './LoginPage/Login';
import Checkout from './Checkout'
import { useDataLayerValue } from './DataLayer';
import { auth } from './firebase';
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise =loadStripe('pk_test_51IHASiB5dO0d8BK404BZfWdeQ53zZJRKFRBIWpSKPb5Ol389XsHQJxjKw96YGT8wAzOPev4bEgomYiYs3uNCMZ5i0054LV7hbd')

function App() {

  const [{user},dispatch] = useDataLayerValue();
  console.log(user)


  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user is loged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

    return ()=>{
      //any cleanup goes here
      unSubscribe();
    }
  },[])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
