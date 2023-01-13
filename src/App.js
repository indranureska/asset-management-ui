import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardView from './components/DashboardView';
import LoginView from './components/LoginView';
import './styles/App.css';

class App extends React.Component {
  
  state = {
    isLoggedIn: false
  };

  render() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={ <DashboardView /> } />
          <Route exact path="/LoginView" element={ <LoginView /> } />
        </Routes>
      </Router>
    );
  }

}

export default App;
