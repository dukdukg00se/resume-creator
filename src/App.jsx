import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Resume from './components/resume/Resume';
import uniqid from 'uniqid';

import { useState, useEffect } from 'react';

class App2 extends React.Component {
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

        <div id="ui">
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
            educationList={this.state.educationList}
          />
        </div>
      </div>
    );
  }
}

function App() {
  const [personal, setPersonal] = useState({
    name: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    summary: '',
  });
  const [experienceList, setExperienceList] = useState([
    {
      position: '',
      company: '',
      location: '',
      from: '',
      to: '',
      responsibilities: '',
      id: uniqid(),
    },
  ]);
  const [educationList, setEducationList] = useState([
    {
      degree: '',
      major: '',
      university: '',
      graduated: '',
      description: '',
      id: uniqid(),
    },
  ]);

  const handleChange = (e) => {
    const element = e.target.parentElement;
    const stateKey =
      element.id === 'personal' ? 'personal' : element.parentElement.id;
    const subKey = e.target.name;

    if (stateKey === 'personal') {
      setPersonal({
        ...personal,
        [subKey]: e.target.value,
      });
    } else {
      let newArr =
        stateKey === 'experienceList'
          ? [...experienceList]
          : [...educationList];

      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id === element.id) {
          let newObj = { ...newArr[i] };
          newObj[subKey] = e.target.value;
          newArr[i] = newObj;
        }
      }

      stateKey === 'experienceList'
        ? setExperienceList(newArr)
        : setEducationList(newArr);
    }
  };

  const handleClick = (e) => {
    console.log(e.target);
    const action = e.target.name;
    const element = e.target.parentElement.previousElementSibling;
    const stateKey = element.id;

    if (action === 'clear') {
      if (stateKey === 'personal') {
        setPersonal({
          name: '',
          title: '',
          address: '',
          phone: '',
          email: '',
          summary: '',
        });
      }

      if (stateKey === 'experienceList') {
        let newArr = [...experienceList];

        for (let i = 0; i < newArr.length; i++) {
          for (let key in newArr[i]) {
            if (key !== 'id') newArr[i][key] = '';
          }
        }

        setExperienceList(newArr);
      }

      if (stateKey === 'educationList') {
        let newArr = [...educationList];

        for (let i = 0; i < newArr.length; i++) {
          for (let key in newArr[i]) {
            if (key !== 'id') newArr[i][key] = '';
          }
        }

        setEducationList(newArr);
      }
    }
  };

  return (
    <div>
      <Header />

      <div id="ui">
        <Form
          onChange={handleChange}
          onClick={handleClick}
          personalInfo={personal}
          experienceList={experienceList}
          educationList={educationList}
        />

        <Resume
          personal={personal}
          experienceList={experienceList}
          educationList={educationList}
        />
      </div>
    </div>
  );
}

export default App;
