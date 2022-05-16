import { Box, Container, Grid } from '@mui/material';
import  Budget  from '../../../components/dashboard/budget';
import  LatestOrders  from '../../../components/dashboard/latest-orders';
import  LatestProducts  from '../../../components/dashboard/latest-products';
import  TasksProgress  from '../../../components/dashboard/tasks-progress';
import  TotalCustomers  from '../../../components/dashboard/total-customers';
import  TotalProfit  from '../../../components/dashboard/total-profit';

export default function Dashboard(){
  
  return (
   
    <Grid container component="main">
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      mb={7}
        >
        <Grid
          item
          xs={4}
          sm={3}
          md={3}
        >
          <Budget />
        </Grid>
        <Grid
           item
           xs={4}
           sm={3}
           md={3}
        >
          <TotalCustomers />
        </Grid>
        <Grid
            item
            xs={4}
            sm={3}
            md={3}
        >
          <TasksProgress />
        </Grid>
        <Grid
          item
          xs={4}
          sm={3}
          md={3}
        >
           <TotalProfit /> 
        </Grid>
       
     
      </Grid>

      <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 12, sm: 12, md: 12 }}
      mb={7}
        >

       <Grid
           item
           xs={6}
           sm={6}
           md={6}
        >
           <LatestProducts  /> 
        </Grid> 
         <Grid
          item
           xs={6}
           sm={6}
           md={6}
        >
           <LatestOrders /> 
        </Grid>
        </Grid>

    </Grid>
 
   );

}


