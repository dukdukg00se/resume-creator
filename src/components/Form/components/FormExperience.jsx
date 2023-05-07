import React from 'react';

class FormExperience extends React.Component {
  render() {
    // console.log(this.props.experienceList);
    const { experienceList, onChange } = this.props;

    return (
      // <div id="experience">
      //   <input
      //     name="position"
      //     type="text"
      //     placeholder="Position"
      //     value={this.props.experience.position}
      //     onChange={this.props.onChange}
      //   ></input>
      //   <input
      //     name="company"
      //     type="text"
      //     placeholder="Company"
      //     value={this.props.experience.company}
      //     onChange={this.props.onChange}
      //   ></input>
      //   <input
      //     name="location"
      //     type="text"
      //     placeholder="City"
      //     value={this.props.experience.city}
      //     onChange={this.props.onChange}
      //   ></input>
      //   <input
      //     name="from"
      //     type="text"
      //     placeholder="From"
      //     value={this.props.experience.from}
      //     onChange={this.props.onChange}
      //   ></input>
      //   <input
      //     name="to"
      //     type="text"
      //     placeholder="To"
      //     value={this.props.experience.to}
      //     onChange={this.props.onChange}
      //   ></input>
      //   <textarea
      //     name="responsibilities"
      //     placeholder="Responsibilities"
      //     value={this.props.experience.responsibilities}
      //     onChange={this.props.onChange}
      //   ></textarea>
      // </div>

      <div id="experienceList">
        {experienceList.map((experience) => {
          return (
            <div key={experience.id} id={experience.id}>
              <input
                name="position"
                type="text"
                placeholder="Position"
                value={experience.position}
                onChange={onChange}
              ></input>
              <input
                name="company"
                type="text"
                placeholder="Company"
                value={experience.company}
                onChange={onChange}
              ></input>
              <input
                name="location"
                type="text"
                placeholder="City"
                value={experience.city}
                onChange={onChange}
              ></input>
              <input
                name="from"
                type="text"
                placeholder="From"
                value={experience.from}
                onChange={onChange}
              ></input>
              <input
                name="to"
                type="text"
                placeholder="To"
                value={experience.to}
                onChange={onChange}
              ></input>
              <textarea
                name="responsibilities"
                placeholder="Responsibilities"
                value={experience.responsibilities}
                onChange={onChange}
              ></textarea>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FormExperience;
