import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Button,
  Box,
  CardHeader,
} from "@mui/material";
import { Divider } from "@mui/material-next";
import React from "react";

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ width: 400, paddingBottom: 1 }}>
        <CardHeader sx={{ textAlign: "center" }} title="Login" />
        <Divider variant="middle" />
        <CardContent>
          <Grid
            container
            rowSpacing={2}
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            sx={{ pl: 1, pr: 1 }}
          >
            <Grid item>
              <TextField id="filled-basic" label="Email" fullWidth />
            </Grid>
            <Grid item>
              <TextField id="filled-basic" label="Password" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            onClick={handleClickOpen}
            size="small"
            fullWidth
          >
            Login
          </Button>
        </CardActions>

        <Grid container justifyContent="center">
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{ width: 450 }}>Token</DialogTitle>
            <DialogContent>Please Enter Your Token!</DialogContent>
            <Grid container justifyContent="center">
              <TextField
                margin="normal"
                id="Token"
                label="Enter Token"
                variant="standard"
                sx={{ width: 400 }}
              />
            </Grid>
            <DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Back</Button>
                <Button onClick={handleClose}>Login</Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </Grid>
      </Card>
    </Box>
  );
};

export default Login;
