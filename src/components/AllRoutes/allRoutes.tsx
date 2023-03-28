import react from "react";
import { useRoutes } from "react-router-dom";
import Homescreen from "../Homescreen/Homescreen";
import SignIn from "../Form/SignIn";
import SignUp from "../Form/SignUp";
import Korapayfile from "../../components/Korapayfile";

const AllRoute = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/korapay",
      element: <Korapayfile />,
    },
  ]);
  return element;
};
export default AllRoute;
