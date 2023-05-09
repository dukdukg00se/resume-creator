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
      experienceList: [
        {
          position: '',
          company: '',
          location: '',
          from: '',
          to: '',
          responsibilities: '',
          id: uniqid(),
        },
      ],
      educationList: [
        {
          degree: '',
          major: '',
          university: '',
          graduated: '',
          description: '',
          id: uniqid(),
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState((state) => {
      const element = e.target.parentElement;
      const stateKey =
        element.id === 'personal' ? 'personal' : element.parentElement.id;
      const subKey = e.target.name; // e.g., name

      if (stateKey === 'personal') {
        let newObj = { ...state[stateKey] };
        newObj[subKey] = e.target.value;
        return {
          [stateKey]: newObj,
        };
      }

      let newArr = [...state[stateKey]];
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id === element.id) {
          let newObj = { ...newArr[i] };
          newObj[subKey] = e.target.value;
          newArr[i] = newObj;
        }
      }
      return {
        [stateKey]: newArr,
      };
    });
  }

  handleClick(e) {
    this.setState((state) => {
      let action = e.target.name;
      let element = e.target.parentElement.previousElementSibling;
      const stateKey = element.id;

      if (action === 'clear') {
        if (stateKey === 'personal') {
          let newObj = { ...state[stateKey] };
          for (let key in newObj) {
            newObj[key] = '';
          }

          return { [stateKey]: newObj };
        }

        let newArr = [...state[stateKey]];
        for (let i = 0; i < newArr.length; i++) {
          for (let key in newArr[i]) {
            if (key !== 'id') newArr[i][key] = '';
          }
        }

        return {
          [stateKey]: newArr,
        };
      }

      if (action === 'add') {
        let newArr = [...state[stateKey]];
        let newObj;

        if (stateKey === 'experienceList') {
          newObj = {
            position: '',
            company: '',
            location: '',
            from: '',
            to: '',
            responsibilities: '',
            id: uniqid(),
          };
        } else {
          newObj = {
            degree: '',
            major: '',
            university: '',
            graduated: '',
            description: '',
            id: uniqid(),
          };
        }

        newArr.push(newObj);

        return {
          [stateKey]: newArr,
        };
      }

      if (action === 'delete') {
        if (state[stateKey].length < 1) return;

        let newArr = [...state[stateKey]];
        newArr.pop();

        return {
          [stateKey]: newArr,
        };
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
          experienceList={this.state.experienceList}
          educationList={this.state.educationList}
        />

        <Resume
          personal={this.state.personal}
          experienceList={this.state.experienceList}
          education={this.state.educationList}
        />
      </div>
    );
  }
}

export default App;
