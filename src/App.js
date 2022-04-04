import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, { useState } from 'react';
import Alert from './Component/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //wether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
    }
  }
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* {users --> Component1
            /users/home --> Component2 } */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform heading="Enter the text to analysis" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App; 
