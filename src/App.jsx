import React from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Resume from './components/resume/Resume';
import uniqid from 'uniqid';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        summary: '',
      },
      experience: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
        responsibilities: '',
        id: uniqid(),
      },
      education: {
        degree: '',
        major: '',
        university: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(),
      },
      experienceList: [],
      educationList: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState((state) => {
      let parent = e.target.parentElement.id; // e.g., personal
      let child = e.target.name; // e.g., name
      let newObj = { ...state[parent] };
      newObj[child] = e.target.value;

      return {
        [parent]: newObj,
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Form onChange={this.handleChange} personalInfo={this.state.personal} />
        <Resume personal={this.state.personal} />
        <ul>
          <li>{this.state.personal.name}</li>
          <li>{this.state.personal.title}</li>
          <li>{this.state.personal.address}</li>
          <li>{this.state.personal.phone}</li>
          <li>{this.state.personal.email}</li>
          <li>{this.state.personal.summary}</li>
          <li>{this.state.experience.position}</li>
          <li>{this.state.experience.company}</li>
          <li>{this.state.personal.city}</li>
          <li>{this.state.experience.from}</li>
          <li>{this.state.experience.to}</li>
          <li>{this.state.experience.responsibilities}</li>
        </ul>
      </div>
    );
  }
}

export default App;
