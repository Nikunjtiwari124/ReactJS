import React, { Suspense } from "react";
import { BrowserRouter as Router, Route,Switch  } from "react-router-dom";
import routes from "./routes";
import './assests/scss/main.scss';
import theme from './assests/scss/theme';
import { ThemeProvider } from '@mui/material/styles';
import MyErrorBoundary from './components/errors/ErrorBoundary';

export default () => (

  <ThemeProvider theme={theme}>
    <MyErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            }}
          />
        );
      })}
     </Switch>
     </Router>
     </Suspense>
	</MyErrorBoundary>
  </ThemeProvider>
);
