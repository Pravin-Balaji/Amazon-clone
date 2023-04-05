import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Address from './Components/Address';
import Payment from './Components/Payment';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from './Components/AddProduct';
import Orders from './Components/Orders';

const promise = loadStripe(
  "pk_test_51MZfL1SFs4aiNAvZS2pWgQCmxlxMhrlKuUrk8pcXUtJmgfTYcdo1NIStRFynMaPnCGyrnheKsqBWMcCvXwJ5szEI00yPmriT4z"
);


function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;

