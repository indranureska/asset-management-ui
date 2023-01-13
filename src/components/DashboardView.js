import React from 'react';
import { Navigate } from "react-router-dom";
import '../styles/App.css';


class DashboardView extends React.Component {
  
  state = {
      isLoggedIn: false
  };

  render() {
    // Redirect to login page if logged-in state is false
    if(!this.state.isLoggedIn) {
        return <Navigate to="/LoginView"/>
    }

    return(
      <div id="mainLayout" className="app">
          DashboardView
      </div>
    );
  }

}

export default DashboardView;