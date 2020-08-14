import React from 'react';
import './App.css';
import Form from './components/Form.jsx'
import List from './components/List';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App_wrapper">
          <Form></Form>
          <List></List>
        </div>
      </div>
    </div>
  );
}

export default App;
