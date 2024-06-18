"use client";
import { useState } from "react";
import RestaurantLogin from "../components/restaurantLogin";
import RestaurantSignup from "../components/restaurantSignup";
import RestaurantHeader from "../components/RestaurantHeader";
import './style.css';
import RestaurantFooter from "../components/RestaurantFooter";


const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
    <div className="container">
        <RestaurantHeader />
      <h1> Restaurant Login/signup Page</h1>
      {
      login ? <RestaurantLogin /> : <RestaurantSignup />
      }
      <div>
      <button className="button-link" onClick={() => setLogin(!login)}>
        {login ? "do not have account? Signup" : "Already have Account ? Login"}
      </button>
      </div>
      </div>
      <RestaurantFooter />
    </>
  )
};

export default Restaurant;
