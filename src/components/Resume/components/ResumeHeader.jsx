import emailIcon from '../../../assets/email-icon.svg';
import locationIcon from '../../../assets/location-icon.svg';
import phoneIcon from '../../../assets/phone-icon.svg';
import React from 'react';

class ResumeHeader extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h1>{this.props.personal.name}</h1>
          <h2>{this.props.personal.title}</h2>
        </div>
        <div>
          <ul>
            <li>
              <img src={phoneIcon} alt="icon" className="phone icon" />
              {this.props.personal.phone}
            </li>
            <li>
              <img src={emailIcon} alt="icon" className="email icon" />
              {this.props.personal.email}
            </li>
            <li>
              <img src={locationIcon} alt="icon" className="location icon" />
              {this.props.personal.address}
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default ResumeHeader;
