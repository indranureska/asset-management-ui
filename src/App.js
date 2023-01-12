import React from 'react';
import { Redirect } from "react-router-dom";
import './styles/App.css';

class App extends React.Component {
  
  state = {
    isLoggedIn: false
  };

  render() {
    // Redirect to login screen if user is not in logged-in state
    if(!this.state.isLoggedIn) {
      return <Redirect to="/Login"/>
    } 

    return(
      
      <div id="mainLayout" className="App"></div>
    );
  }

}

export default App;
