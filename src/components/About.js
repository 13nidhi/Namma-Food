import React from 'react';
//import User from './User';
import UserClass from './UserClass';

// making About page a class based component
class About extends React.Component {

  constructor(props){
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("parent did mount");
  }

  render() {
    //console.log("parent render");
      return (
      <div>
        <div>This is our food page application.</div>
        <UserClass name={"Nidhi Patwa(Class)"} location={"Nemuch (Class)"} />
      </div>
      )
  }
}

// const About = () => {
//   return (
//     <div>
//     <div>This is our food page application.</div>
//     {/* <User name="Nidhi Patwa(function)"/> */}
//     <UserClass name="Nidhi Patwa(Class)" location="Nemuch (Class)"/>
//     </div>
//   )
// }

export default About; 