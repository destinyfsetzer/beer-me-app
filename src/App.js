import React from 'react';
import SignInComponent from './components/SignIn'
import Navigation from './components/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SignInComponent />
    </div>
  );
}

export default App;
