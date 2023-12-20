import { styled } from "@mui/material/styles";
import CustomAppbar from "Screens/Appbar/Appbar";
import { Outlet as Children } from "react-router-dom";

const Drawer_Width = 240;
const MainAuthScreen = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${Drawer_Width}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
const AuthScreen = () => {
  return (
    <>
      <MainAuthScreen>
        <CustomAppbar drawerWidth={Drawer_Width} IsAuth={true} />
      </MainAuthScreen>
      <Children />
    </>
  );
};

export default AuthScreen;
