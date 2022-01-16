import HomePage from '../Pages/Home/HomePage';
import RouteModel from "../Models/IRouteModel";
import NewPage from 'Pages/New/NewPage';

const config: Array<RouteModel> = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: HomePage,
  },
  {
    path: "/new",
    exact: true,
    auth: false,
    component: NewPage,
  },
];

export default config;
