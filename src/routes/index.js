import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { DefaultLayout } from ".././layouts"; 
import { AuthLayout } from ".././layouts";
import helper from "../provider/helper";
import { ROUTE_LANDING,ROUTE_LOGIN,ROUTE_REGISTER,ROUTE_PRODUCT,ROUTE_DASHBOARD,ROUTE_DETAIL,ROUTE_FAVROIT,ROUTE_CHECKOUT,ROUTE_PROFILE,ROUTE_SETTING,ROUTE_ERROR} from './allNavigationRoutes';

const tokenValue = helper.SecureStorageFunc("userToken", "get", "");

const LoginPage = lazy(() => import("../views/public/login/login"));
const SignupPage = lazy(() => import("../views/public/signup/signup"));
const ErrorPage = lazy(() => import("../views/public/error/404"));
const ProductPage = lazy(() => import("../views/private/product/product"));
const DetailPage = lazy(() => import("../views/private/detail/detail"));
const FavroitPage = lazy(() => import("../views/private/favroit/favroit"));
const CheckoutPage = lazy(() => import("../views/private/checkout/Checkout"));
const ProfilePage = lazy(() => import("../views/private/profile/profile"));
const DashboardPage = lazy(() => import("../views/private/dashboard/dashboard"));


export default [
  { path: ROUTE_LANDING, exact: true, layout: DefaultLayout,  component: () => <Redirect to={tokenValue?ROUTE_DASHBOARD:ROUTE_LOGIN} />  },
  { path: ROUTE_LOGIN, layout: DefaultLayout, component: LoginPage },
  { path: ROUTE_REGISTER, layout: DefaultLayout, component: SignupPage },
  { path: ROUTE_PRODUCT, layout: AuthLayout, component: ProductPage },
  { path: ROUTE_DETAIL, layout: AuthLayout, component: DetailPage },
  { path: ROUTE_FAVROIT, layout: AuthLayout, component: FavroitPage },
  { path: ROUTE_CHECKOUT, layout: AuthLayout, component: CheckoutPage },
  { path: ROUTE_PROFILE, layout: AuthLayout, component: ProfilePage },
  { path: ROUTE_DASHBOARD, layout: AuthLayout, component: DashboardPage },
  { path: ROUTE_ERROR,  layout: DefaultLayout, component: ErrorPage },
];


