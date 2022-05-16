import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import  Header  from './Header';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Collapse from '@mui/material/Collapse';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import { ROUTE_FAVROIT,ROUTE_DASHBOARD,ROUTE_CHECKOUT,ROUTE_PRODUCT,ROUTE_SETTING } from '../../routes/allNavigationRoutes';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';


const theme = createTheme();
const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
 
}));

const items = [
  {
    href: ROUTE_DASHBOARD,
    icon: (<BarChartIcon  />),
    title: 'Dashboard'
  },
  {
    href: ROUTE_PRODUCT,
    icon: (<Inventory2Icon  />),
    title: 'Product'
  },
  {
    href: ROUTE_FAVROIT,
    icon: (<FavoriteIcon  />),
    title: 'Favroits'
  },
  {
    href: ROUTE_CHECKOUT,
    icon: (<ShoppingCartCheckoutIcon  />),
    title: 'Checkout'
  },
  {
    href: ROUTE_SETTING,
    icon: (<SettingsIcon  />),
    title: 'Setting'
  }
  
];

export default class MainNavbar extends React.Component {

  constructor(props) {
		super(props);

    this.state = {
      open:true
    };
  }
  
  
  handleClick = (e) => {
    this.setState({ [e]: !this.state[e] });
  };

   handleDrawerOpen = (onChildValue) => {
    this.setState({open:true});
   };

  handleDrawerClose = () => {
    this.setState({open:false});
   };

 
   go_to_specific_page = (text) => {

    if(text=="Favroits"){
      this.props.history.history.push(ROUTE_FAVROIT);
    }else if(text=="Product"){
      this.props.history.history.push(ROUTE_PRODUCT);
    }else if(text=="Checkout"){
      this.props.history.history.push(ROUTE_CHECKOUT);
    }else if(text=="Dashboard"){
      this.props.history.history.push(ROUTE_DASHBOARD);
    }
   // this.props.history.history.push(ROUTE_LOGIN);
    
  }



  render() {

    const { children, noNavbar, noFooter } = this.props.history;
    
    const active = this.props.history.location.pathname;

    console.log("active",active);

    return (


    <Box sx={{ display: 'flex'}}>
      <CssBaseline />

      <Header open={this.state.open}  onChildClick={()=>{this.handleDrawerOpen()}}/>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box", 
           // backgroundImage: 'url("https://reduction-admin.github.io/react-reduction/static/media/sidebar-4.80d4a4e5.jpg")',
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
             backgroundColor: "rgb(17, 24, 39)",
             color: "#fff",
             transition: "0.7s",
            
          },
        }}
        variant="persistent"
        anchor="left"
        open={this.state.open}
      >
        <DrawerHeader >
           <Box> <Typography variant="h5" color="white" style={{fontSize:18,marginRight:41}}>
            Meterial Design
            </Typography></Box>
          <IconButton onClick={()=>{this.handleDrawerClose()}}>
            {theme.direction === "ltr" ? (
          
              <ChevronLeftIcon style={{ fill: '#fff' }} />
           
            ) : (
              <ChevronRightIcon style={{ fill: '#fff' }} />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List >
           {items.map((text, index) => (

                  <ListItem
                  disableGutters
                  key={index}
                  sx={{display: 'flex', mb: 0.5, py: 0,px: 2 }}
                  onClick={()=>{this.go_to_specific_page(text.title)}}
                  >

                  <Button
                    component="a"
                    startIcon={text.icon}
                    disableRipple
                    sx={{
                      backgroundColor: Boolean(text.href==active) && 'rgba(255,255,255, 0.08)',
                      borderRadius: 1,
                      color: Boolean(text.href==active) ? 'secondary.main' : 'neutral.300',
                      fontWeight: Boolean(text.href==active) && 'fontWeightBold',
                      justifyContent: 'flex-start',
                      px: 3,
                      textAlign: 'left',
                      textTransform: 'none',
                      width: '100%',
                      '& .MuiButton-startIcon': {
                        color: Boolean(text.href==active) ? 'secondary.main' : 'neutral.400'
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255, 0.08)'
                      }
                    }}
                    >
                   <Box sx={{ flexGrow: 1,fontSize: "15px", fontWeight: 700 }}>
                   {text.title}
                 </Box>
               </Button>
           </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={this.state.open} >
        <DrawerHeader />
        {children}
      </Main>

    </Box>
  );
 }
}