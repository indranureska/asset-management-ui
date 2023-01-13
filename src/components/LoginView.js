import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';

import '../styles/App.css';
import '../styles/Button.css';
import '../styles/TextField.css';

class LoginView extends React.Component {
  
  render() {
    return(
      <div id="mainLayout" className="app login-main-layout">
          <div id="leftSide" className="login-sub-layout">
            <Stack spacing={10} width="100%">
              <div id="logo">[Put Logo Here]</div>  
              <div id="appName" className="app-name">Asset Management</div>
              <div id="loginForm" className="login-form">
                <form>
                  <div className="login-fields">
                    <Stack spacing={2}>
                      <TextField id="emailAddress" label="Email Address" variant="outlined" size="small"/>
                      <TextField id="password" label="Password" variant="outlined" size="small"/>
                      <Button variant="contained" size="small">Login</Button>
                    </Stack>
                  </div>
                </form>
              </div>
            </Stack>
          </div>
          <div id="rightSide" className="login-sub-layout"><div id="loginImage" className="login-image">[Put Login Image Here]</div></div>
      </div>
    );
  }

}

export default LoginView;