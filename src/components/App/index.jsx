import React from 'react';
import './App.css';
import GridView from '../GridView';
// Insert Location 7
import { withAuthenticator } from 'aws-amplify-react';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <h1 className="pageName">GreengoFlix</h1>
        <p>Click to watch a Flix.</p>
        <GridView />
      </header>
    </div>
  );
}

// Insert Location 8
export default withAuthenticator(App, true);
