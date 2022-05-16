import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {updateCartAmount} from "../Redux/action/action";
import CartBtn from "./increment_decrement_btn";
import { useHistory } from 'react-router-dom';
import { ROUTE_CHECKOUT } from '../../routes/allNavigationRoutes';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Cart(props) {

  const history = useHistory();

  const dispatch = useDispatch();

  const setCartClose = () => {
    props.onCartClose();
  };

  const { cart_arr, checkout_amount } = useSelector((state) => state.todos);

  useEffect(() => {

      const count_data =  cart_arr.reduce(function(sum, current) {
        return sum + current.price  * current.quantity;
      }, 0);

      dispatch(updateCartAmount(count_data.toFixed(2)));

  }, []);

  

  return (
    <Box>

      <Box
        position="fixed"
        maxwidth="md"
        style={{
          top: "0px",
          color: "#000",
          position: "fixed",
          overflow: "hidden",
          width: 400,
          height: "65px",
          background: "#fff",
          boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          >
          <Typography
            component="span"
            variant="body2"
            color="#000"
            style={{ marginTop: "23px", fontWeight: 600,fontSize: "20px"}}
          >
             CART
          </Typography>

          
          {/* <Typography
            component="span"
            variant="body2"
            color="blue"
            style={{ marginTop: "23px",marginLeft: "19px",position:"absolute",marginLeft:"-332px"}}
          >
             <ArrowBackIcon/>
          </Typography> */}
         
        </Grid>

         
      </Box>

       

       
      <List sx={{ width: 400, maxWidth: 1000, bgcolor: "background.paper",marginTop:10 }}>
        {cart_arr?.map((product) => (
          <React.Fragment key={product.id}>
            <ListItem secondaryAction={
                     <React.Fragment>
                      <CartBtn quantity={product.quantity} productId={product.id}/>
                    </React.Fragment>
                  }>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={product.image} variant="square" />
              </ListItemAvatar>
              <ListItemText
                primary={product.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {"$" + product.price * product.quantity}
                  </React.Fragment>
                }
              />
            </ListItem>
            
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}

      </List>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '70vh' }}
      >

        <Grid item xs={3} style={{backgroundColor:"red",padding:10,borderRadius:10,color:"white"}}>
          No Item in Your Cart
        </Grid>   
        
      </Grid> 

        <Box position="fixed"
        maxwidth="md"
        style={{
          bottom: "50px",
          color: "white",
          position: "fixed",
          overflow: "hidden",
          width: 400,
          height: "50px",
          background: "hsl(240deg 6% 87%)",
        }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <List disablePadding>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {"$ "+checkout_amount}
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Box>
      <Box
        position="fixed"
        maxwidth="md"
        style={{
          bottom: "0px",
          color: "white",
          position: "fixed",
          overflow: "hidden",
          width: 400,
          height: "50px",
          background: "rgb(47 193 52)",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="span"
            variant="body2"
            color="white"
            style={{ marginTop: "12px", fontWeight: 600,cursor:'pointer' }}
            onClick={()=>{history.push(ROUTE_CHECKOUT)}}
          >
            Checkout
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
}
