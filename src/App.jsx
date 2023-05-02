import React from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Resume from './components/resume/Resume';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Resume />
      </div>
    );
  }
}

export default App;
