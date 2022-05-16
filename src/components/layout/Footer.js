import * as React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { ROUTE_FAVROIT,ROUTE_DASHBOARD,ROUTE_CHECKOUT } from '../../routes/allNavigationRoutes';
import { useHistory } from 'react-router-dom';

export default function Footer(props) {

  const [value, setValue] = React.useState(0);
  const history = useHistory();

  return (

    <Box style={{bottom: "0px",position: "fixed",overflow: "hidden",width:"100%",boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"}} position="fixed">
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if(newValue==1){
          history.push(ROUTE_FAVROIT);
        }else if(newValue==0){
          history.push(ROUTE_DASHBOARD);
        }else if(newValue==2){
          history.push(ROUTE_CHECKOUT);
        }
       
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon  style={{ fill: '#000' }}/>} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon  style={{ fill: '#000' }}/>} />
      <BottomNavigationAction label="Checkout" icon={<ShoppingCartCheckoutIcon  style={{ fill: '#000' }}/>} />
    </BottomNavigation>
   </Box>
   
  );
}
