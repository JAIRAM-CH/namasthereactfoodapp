import UserCard from "./UserCard";
import UserClass from "./UserClass";
import ProgressBar from "./Test";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called!");
  }

  componentDidMount() {
    console.log("parent is Mounted!");
  }
  render() {
    return (
      <>
        <h2>About Page</h2>
        {console.log("parent render called!")}
        {/* <UserCard name={"Jairam"} location={"Tadepalli"} company={"Inventiz"} /> */}
        <UserClass
          name={"Jairam"}
          location={"Tadepalli"}
          company={"Inventiz"}
        />
        {/* <ProgressBar /> */}
      </>
    );
  }
}

export default About;
