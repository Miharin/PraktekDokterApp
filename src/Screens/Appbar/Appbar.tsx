import { styled } from "@mui/material/styles";
import {
  AppBar as MuiAppbar,
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

interface Custom_Appbar_Interface {
  (Props: { Open?: boolean; DrawerWidth: number; IsAuth: boolean }): any;
}

interface Custom_Styled_Appbar_Interface {
  open?: boolean;
  DrawerWidth: number;
}

const CustomStyledAppbar = styled(MuiAppbar, {
  shouldForwardProp: (prop) => prop !== "open",
})<Custom_Styled_Appbar_Interface>(({ theme, open, DrawerWidth }) => ({
  backgroundColor: "#e0c1f7",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DrawerWidth}px)`,
    marginLeft: `${DrawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomAppbar: Custom_Appbar_Interface = (Props) => {
  const { Open, DrawerWidth, IsAuth } = Props;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomStyledAppbar
        DrawerWidth={DrawerWidth}
        position="fixed"
        open={Open}
      >
        <Toolbar>
          {IsAuth === false ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {}}
              edge="start"
              sx={{ mr: 2, ...(Open && { display: "none" }) }}
            >
              <Menu />
            </IconButton>
          ) : null}
          <Typography variant="h6" color="black" noWrap component="div">
            Login
          </Typography>
        </Toolbar>
      </CustomStyledAppbar>
    </Box>
  );
};

export default CustomAppbar;
