import React, { useState } from 'react';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Paper,Box,Grid,Typography,InputAdornment,Container}  from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { ROUTE_DASHBOARD } from '../../../routes/allNavigationRoutes';
import Loader from "../../../components/loader";
import { HANDLE_SUCCESS, HANDLE_ERROR, HTTP_SERVICE_CALL } from "../../../provider/ApiProvider";
import { POST, BASE_URL, SIGN_IN, GOOGlE_CLIENT_ID, FACEBOOK_APP_ID } from "../../../provider/EndPoints";
import helper from "../../../provider/helper";
import "./style.scss";


export default function LoginPage(props) {

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    let dataObj = {
      "email": data.get('email'),
      "password": data.get('password'),
      "loginType": 1
    }
    try {
      setLoader(true);
      let res = await HTTP_SERVICE_CALL(BASE_URL + SIGN_IN, POST, "", dataObj)
      setLoader(false);
      if (res && res.status === 200) {
        helper.SecureStorageFunc("userToken", "set", res.data?.data?.token);
        helper.SecureStorageFunc("userData", "set", res.data?.data);
        HANDLE_SUCCESS(res && res.data.message ? res.data.message : res.statusText);
        props.history.push(ROUTE_DASHBOARD);
      } else {
        HANDLE_ERROR();
      }
    } catch (error) {
      setLoader(false);
      HANDLE_ERROR(error && error.data && error.data.message ? error.data.message : error?.statusText);
    }

    //props.history.push(ROUTE_DASHBOARD);

  };


  return (
   
     
     <Container component="main" maxWidth="sm">
     
      <Loader loading={loader} />
      <CssBaseline />
      {/* <Paper variant="outlined" square elevation={0} className="paper_design"> */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
       
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              )
            }}
          />
         
          <FormControlLabel
            control={
              <Checkbox
                id="checkbox"
                name="checkbox"
                value="remember"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
       
      </Grid>
      {/* </Paper> */}
    </Container>
    
  );
}