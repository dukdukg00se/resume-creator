import React from 'react';
import Personal from './components/Personal';

class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <Personal />
      </form>
    );
  }
}

export default Form;
