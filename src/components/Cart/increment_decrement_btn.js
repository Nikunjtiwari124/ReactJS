import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateCartAmount,
  updateCartCount,
  updateCart,
} from "../Redux/action/action";

export default function CartBtn(props) {

  const dispatch = useDispatch();

  const setCartClose = () => {
   // props.onCartClose();
  };

  const { count, cart_arr, checkout_amount } = useSelector((state) => state.todos);
  const todos = useSelector((state) => state.todos);

  console.log("todos",todos);


  const handleIncrement = (quantity,productId) => {

    
      const cart_old_arr = cart_arr;
      let index = cart_arr.findIndex(
        (item) => parseInt(item.id) === parseInt(productId)
      );

      if (index>=0) {
        cart_old_arr[index].quantity = parseInt(cart_arr[index].quantity) + 1;
      }

      const count_data =  cart_old_arr.reduce(function(sum, current) {
        return sum + current.price  * current.quantity;
      }, 0);

      console.log("count_data",count_data);

    dispatch(updateCartCount(parseInt(count) + 1));
    dispatch(updateCart(cart_old_arr))
    dispatch(updateCartAmount(count_data.toFixed(2)))

   
  }

  const handleDecrement = (quantity,productId) => {

    if(quantity==0){
      return false;
    }

    const cart_old_arr = cart_arr;
    let index = cart_arr.findIndex(
      (item) => parseInt(item.id) === parseInt(productId)
    );

    if (index>=0) {
      cart_old_arr[index].quantity = parseInt(cart_arr[index].quantity) - 1;
    }

    const count_data =  cart_old_arr.reduce(function(sum, current) {
      return sum + current.price  * current.quantity;
    }, 0);

    dispatch(updateCartCount(parseInt(count) - 1));
    dispatch(updateCart(cart_old_arr))
    dispatch(updateCartAmount(count_data.toFixed(2)))

  }
  

  return (
    
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={()=>{handleIncrement(props.quantity,props.productId)}}>+</Button>
        <Button disabled>{props.quantity}</Button>
        <Button onClick={()=>{handleDecrement(props.quantity,props.productId)}}  >-</Button>
      </ButtonGroup>

  );
}
