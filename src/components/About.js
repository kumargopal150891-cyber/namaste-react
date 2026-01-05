import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h5>Class based component</h5>
//       <UserClass
//         name="Gopal"
//         location="Noida"
//         email="kumar.gopal.abes@gmail.com"
//       />
//     </div>
//   );
// };
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("Parent Component did mount called");
  }
  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About us </h1>
        <h5>Class based component</h5>
        <UserClass
          name="Gopal"
          location="Noida"
          email="kumar.gopal.abes@gmail.com"
          userName="akshaymarch7"
        />
        <UserClass
          name="allen"
          location="Noida"
          email="kumar.gopal.abes@gmail.com"
          userName="kumargopal150891-cyber"
        />{" "}
      </div>
    );
  }
}

export default About;
