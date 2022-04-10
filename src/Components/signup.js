import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

import './signup.css';
import insta from '../Assets/download(3).png'

export default function Login() {
  const useStyles = makeStyles({
    text1:{
      color:'grey',
      textAlign:'center'
    }
    
  })
  const classes = useStyles();
  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="" />
          </div>
          <CardContent>
              <Typography className={classes.text1}variant="subtitle1">
                Sign up to see photos and videos from your friends
              </Typography>
              {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </CardContent>
         <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>

  );
}
