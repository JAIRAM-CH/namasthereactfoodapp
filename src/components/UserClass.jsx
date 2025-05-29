import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 0,
    };
    console.log("child constructor called!");
  }

  componentDidMount() {
    console.log("child class mounted!");
  }
  render() {
    const { name, location, company } = this.props;
    const { count, count1 } = this.state;
    console.log("child render called!");
    return (
      <>
        <h2>Name: {name}</h2>
        <h3>location : {location}</h3>
        <h3> company : {company}</h3>
        <h4>count : {count}</h4>
        <h4>count : {count1}</h4>
        <button
          type="button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 2,
            });
          }}
        >
          Increment
        </button>
      </>
    );
  }
}

export default UserClass;
