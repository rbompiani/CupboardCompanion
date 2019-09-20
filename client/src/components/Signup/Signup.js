import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [password, setPassword] = useState ('')
  const [username, setUsername]= useState ('')


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cupboard Companion
        </Typography>
        <form className={classes.form}
            noValidate
            onSubmit={(e =>{
                e.preventDefault()
                console.log('it worked', username, password)
                // axios post state to database 
                // axios.post('/user/', {
                // username: username,
                //       password: password
                //     })
                //     .then(response => {
                //       console.log(response);
                //       if(!response.data.errmsg) {
                //         console.log('successful signup');
                //         this.setState({ //redirect to login page
                //                 redirectTo: '/login'
                //               })
                //       } else {
                //         console.log('username already taken');
                //       }
                //     }).catch(error => {
                //       console.log('signup error: ');
                //       console.log(error);
                //     })
            })}

         >
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value = {username}
            onChange= {(e)=> setUsername(e.target.value)}
          />

            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=> setPassword(e.target.value)}
            value ={password}
          />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href='login' variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}