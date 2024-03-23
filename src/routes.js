import Index from "views/Index.js";

import Register from "views/auth/Register.js";
import Login from "views/auth/Login.js";
import Reservation from "views/Reservation";
import Accomodations from "views/Accomodations";
import Messages from "views/Messages";


var routes = [
  {
    path: "/index",
    name: "Accomodations",
    icon: "ni ni-tv-2 text-primary",
    component: Accomodations,
    layout: "/admin",
  },
 
  {
    path: "/Reservation",
    name: "Reservation",
    icon: "ni ni-planet text-blue",
    component: Reservation,
    layout: "/admin",
  },
  {
    path: "/messages",
    name: "Messages",
    icon: "ni ni-planet text-blue",
    component: Messages,
    layout: "/admin",
  },
 
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    isMenu: false,
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    isMenu: false,
  },
];
export default routes;
