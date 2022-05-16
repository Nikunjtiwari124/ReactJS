import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { connect } from "react-redux";
import {
  updateCartCount,
  UpdateAllProduct,
} from "../../../components/Redux/action/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ROUTE_DETAIL } from "../../../routes/allNavigationRoutes";
import './style.scss';

export default function HomePage(props) {

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
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        mb={7}
      >
        {product_arr?.map((product) => (
          <Grid
            item
             xs={4}
             sm={3}
             md={3}
             key={product.id}
           
            
          >
            <Card sx={{ width:"100%", height: "100%", cursor: "pointer" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={product.title.substring(0, 30)}
                subheader="September 14, 2016"
                onClick={() => GoToDetailPage(product.id)}
                style={{height: "78px",fontSize:"17px"}}
                
              />
              <CardMedia
                component="img"
                height="194"
                style={{objectFit: 'contain'}}
                image={product.image}
                alt="Paella dish"
                onClick={() => GoToDetailPage(product.id)}
              />
              <CardContent onClick={() => GoToDetailPage(product.id)}>
                <Typography
                  className="line-clamp"
                  variant="body2"
                  color="text.secondary"
                  style={{
                    height: "40px",
                    
                  }}
                >
                  {product.description.substring(0, 120)}
                </Typography>
              </CardContent>
              <CardActions disableSpacing >

                {product.favFlag=="yes" ?

                <IconButton onClick={() => addToFavrote(product.id,'no')}>
                  <FavoriteIcon/>
                </IconButton>
                :
                <IconButton onClick={() => addToFavrote(product.id,'yes')}>
                 <FavoriteBorder/>
                </IconButton>
                }

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}

      </Grid>
    </Grid>
  );
}
