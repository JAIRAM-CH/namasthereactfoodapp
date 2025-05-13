import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location, company } = this.props;
    const { count } = this.state;
    return (
      <>
        <h2>Name: {name}</h2>
        <h3>location : {location}</h3>
        <h3> company : {company}</h3>
        <h4>count : {count}</h4>
        <button
          type="button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
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
