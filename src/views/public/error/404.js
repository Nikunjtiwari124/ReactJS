
import { Box, Button, Container, Typography,Grid } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';
import { ROUTE_DASHBOARD } from '../../../routes/allNavigationRoutes';
import  eror_images  from '../../../assests/images/undraw_page_not_found_su7k.svg';

export default function NotFound(){

  const history = useHistory();

  return(
      <Container maxWidth="md">

        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
         >

        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              src={eror_images}
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 560
              }}
            />
          </Box>
         
            <Button
              component="a"
              startIcon={(<ArrowBackIcon fontSize="small" />)}
              sx={{ mt: 3 }}
              variant="contained"
              onClick={()=>{history.push(ROUTE_DASHBOARD)}}
            >
              Go back to dashboard
            </Button>
         
        </Box>
        </Grid>
      </Container>
   
  );
  
}

