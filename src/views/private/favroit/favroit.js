import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from "react-redux";
import {
  updateCartCount,
  UpdateAllProduct,
} from "../../../components/Redux/action/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ROUTE_DETAIL } from "../../../routes/allNavigationRoutes";
import Paper from '@mui/material/Paper';

export default function FavPage(props) {

  const dispatch = useDispatch();
  const product_arr = useSelector((state) => state.todos.product_arr);
  const todos = useSelector((state) => state.todos);

  console.log("product_arr", product_arr);
  console.log("todos", todos);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    try {
      var res = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });
      let a = await res.json();
      if (res.ok) {
        dispatch(UpdateAllProduct(a));
      }
    } catch (e) {}
  };

  const GoToDetailPage = (productId) => {
    props.history.push("/productDetail/" + productId);
  };

  const addToFavrote = (productId,flag) => {

    const product_old_arr = product_arr;
    let index = product_arr.findIndex(
      (item) => parseInt(item.id) === parseInt(productId)
    );

    if (index>=0) {
      product_old_arr[index].favFlag = "no";
      if(flag=='yes'){
        product_old_arr[index].favFlag = "yes";
      }
      
    } 

    dispatch(UpdateAllProduct(product_old_arr));
  };

  return (
    <Grid container component="main">
      <Grid
        container
        mb={7}
        spacing={{ xs: 2, md: 3 }}
        rows={{ xs: 4, sm: 8, md: 12 }}
      >
        {product_arr?.map((product) => (
          <Grid item xs={12} md={12} >
            <Paper elevation={2} style={{  marginLeft: "15%",marginRight: "15%"}}>
            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar sx={{ width: 50, height: 50 }} style={{objectFit: 'contain'}} variant="square" src={product.image}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
                    secondary={ "$" + product.price }
                    style={{marginLeft:10}}
                  />
                </ListItem>
             
            </List>
           </Paper>
        </Grid>
        ))}

      </Grid>
    </Grid>
  );
}
