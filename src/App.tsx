import React from "react";
import BottomNavigationBar from "Components/BottomNavigationBar/Index";
import Login from "Components/BottomNavigationBar/login";
import { Button } from "@mui/material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return <><Button title="Login"/><BottomNavigationBar Value={value} SetValue={setValue} /></>;
}
