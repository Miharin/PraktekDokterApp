import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore, Favorite, LocationOn } from "@mui/icons-material";

interface BottomNavigationBar_Interface {
  (Props: { Value: number; SetValue: Function }): any;
}

const BottomNavigationBar: BottomNavigationBar_Interface = (Props) => {
  const { Value, SetValue } = Props;
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={Value}
        onChange={(event, newValue) => {
          SetValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationBar;
