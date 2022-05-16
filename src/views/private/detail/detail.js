import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import {
  updateCartCount,
  updateCart,
} from "../../../components/Redux/action/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Button from "@mui/material/Button";

export default function DetailPage(props) {
  const { productId } = useParams();

  const [product_detail, setDetail] = useState(null);

  const dispatch = useDispatch();

  const { product_arr,cart_arr,count } = useSelector((state) => state.todos);

  console.log("cart_arr", cart_arr);

  useEffect(() => {
    getProductDetail(productId);
  }, []);

  const getProductDetail = (productId) => {
    console.log("product_arr", product_arr);
    console.log("productId", productId);

    let index = product_arr.findIndex(
      (item) => parseInt(item.id) === parseInt(productId)
    );

    console.log("index", index);
    if (index >= 0) {
      setDetail(product_arr[index]);

      console.log("product_arr[index]", product_arr[index]);
    }
  };

  const addToCart = (productId) => {

    const cart_old_arr = cart_arr;
    let index = cart_arr.findIndex(
      (item) => parseInt(item.id) === parseInt(productId)
    );

    if (index>=0) {
      cart_old_arr[index].quantity = parseInt(cart_arr[index].quantity) + 1;
    } else {
      product_detail.quantity = 1;
      cart_old_arr.push(product_detail);
    }

    dispatch(updateCartCount(parseInt(count) + 1), updateCart(cart_old_arr));
  };

  return (
    <Grid component="main" style={{marginTop: "24px"}}>
      <Grid  container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
       >
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <Typography variant="h2" color="black">
          {product_detail ? product_detail.title : ""}
        </Typography>
        </Grid>

        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >

        <Grid item xs={2} md={2}>
          <Box >
            <Avatar
              alt="Remy Sharp"
              variant="square"
              src={product_detail ? product_detail.image : ""}
              sx={{ width: "100%", height: "100%"}}
            />
          </Box>
        </Grid>
        <Grid item xs={10} md={10}>
          <Box >
           

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              p={7}
            >
              <Typography variant="body2" gutterBottom>
                {product_detail ? product_detail.description : ""}
              </Typography>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
             
            >
              <Typography variant="h3" color="black">
                {product_detail ? "$" + product_detail.price : ""}
              </Typography>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={6}
            >
              <Button
                onClick={() => addToCart(product_detail.id)}
                variant="contained"
                style={{ width: "40%", color: "white" }}
                color="secondary"
              >
                Add To cart
              </Button>
            </Grid>
          </Box>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
