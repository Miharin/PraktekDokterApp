import React from "react";
import BottomNavigationBar from "Components/BottomNavigationBar/Index";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  return <BottomNavigationBar Value={value} SetValue={setValue} />;
}
