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
        location: '',
        from: '',
        to: '',
        responsibilities: '',
        id: uniqid(),
      },
      education: {
        degree: '',
        major: '',
        university: '',
        graduated: '',
        description: '',
        id: uniqid(),
      },
      experienceList: [],
      educationList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    this.setState((state) => {
      let action = e.target.name;
      let parent = e.target.parentElement.parentElement.id;
      let newObj = { ...state[parent] };

      if (action === 'clear') {
        console.log(newObj);
        for (let key in newObj) {
          newObj[key] = '';
        }

        return { [parent]: newObj };
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Form
          onChange={this.handleChange}
          onClick={this.handleClick}
          personalInfo={this.state.personal}
          experience={this.state.experience}
        />
        <Resume
          personal={this.state.personal}
          experience={this.state.experience}
          education={this.state.education}
        />
      </div>
    );
  }
}

export default App;
