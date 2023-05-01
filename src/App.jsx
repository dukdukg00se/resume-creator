import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Resume from './components/Resume/Resume';
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
