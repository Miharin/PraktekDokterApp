import Login from "Screens/Auth/Login";
import AuthScreen from "Screens/Global/AuthScreen";
import { useRoutes, Navigate } from "react-router-dom";

const Routes = () => {
  const Guest = useRoutes([
    {
      path: "/",
      element: <AuthScreen />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: "login", element: <Login /> },
      ],
    },
  ]);

  const Routes = Guest;
  return Routes;
};

export default Routes;
