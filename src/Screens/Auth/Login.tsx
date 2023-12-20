import { Card, 
  CardActions, 
  CardContent, 
  Container, 
  Grid , 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField,
  Typography,
  Box
} from "@mui/material";
import React from "react";


const Login = () => {

  const [open,setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return <Box sx={{justifyContent:"center", alignItems:"center", display:"flex"}} >
        <Card sx={{width: 400}}>
          <CardContent>
            <Typography fontSize={20} textAlign="center">
              Login
            </Typography>
          </CardContent>
          <CardContent>
            <Grid container rowSpacing={4} xs={8}>
              <Grid item xs={8}>
                <TextField id="filled-basic" label="Email" variant="filled" sx={{ m:1, width:"39ch"}} />
              </Grid>
              <Grid item xs={8}>
                <TextField id="filled-basic" label="Password" variant="filled" sx={{ m:1, width:"39ch"}} />
              </Grid>
            </Grid>
          </CardContent>
              <CardActions>
                <Grid container justifyContent="right" >
                  <Button variant="contained" onClick={handleClickOpen} size="small">Login</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{width: 450}}>Token</DialogTitle>
                    <DialogContent>Please Enter Your Token!</DialogContent>
                    <Grid container justifyContent="center">
                      <TextField
                      margin="normal"
                      id="Token"
                      label="Enter Token"
                      variant="standard"
                      sx={{width: 400}}
                      />
                    </Grid>
                    <DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Back</Button>
                        <Button onClick={handleClose}>LogIn</Button>
                      </DialogActions>
                    </DialogContent>
                  </Dialog>
                </Grid>
              </CardActions>
        </Card>
      </Box>
};

export default Login;
