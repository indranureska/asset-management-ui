import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import React from 'react';
import '../styles/App.css';
import '../styles/Button.css';
import '../styles/TextField.css';


class LoginView extends React.Component {
  
  render() {
    return(
      <div id="mainLayout" className="app login-main-layout">
          <div id="leftSide" className="login-sub-layout">
            <div id="logo">[TODO: Put Logo Here]</div>
            <div id="appNameAndLoginForm" className="app-name-login-form">
              <div>  
                <div id="appName" className="app-name">Asset<br/>Management</div>
                <div id="loginForm" className="login-form">
                  <form>
                    <Stack spacing={3}>
                      <TextField id="emailAddress" label="Email Address" variant="outlined" size="normal"/>
                      <TextField id="password" label="Password" variant="outlined" size="normal" 
                              type="password" autoComplete="current-password"/>
                      <div className="login-btn-div">
                        <Button variant="contained" className="login-button">Login</Button>
                       </div>
                    </Stack>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="rightSide" className="login-sub-layout"><div id="loginImage" className="login-image">[TODO: Put Login Image Here]</div></div>
      </div>
    );
  }

}

export default LoginView;