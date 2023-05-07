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
      let parent = e.target.parentElement.parentElement.id;

      console.log(e.target);

      // if (action === 'clear') {
      //   if (parent === 'personal') {
      //     let newObj = { ...state[parent] };
      //     for (let key in newObj) {
      //       newObj[key] = '';
      //     }

      //     return { [parent]: newObj };
      //   }

      //   let newArr = [...state[parent]];
      //   for (let i = 0; i < newArr.length; i++) {
      //     for (let key in newArr[i]) {
      //       newArr[i][key] = '';
      //     }
      //   }

      //   return {
      //     [parent]: newArr,
      //   };
      // }

      // if (action === 'add') {
      //   console.log(parent);
      // }
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
          experience={this.state.experience}
          education={this.state.educationList}
        />
      </div>
    );
  }
}

export default App;
