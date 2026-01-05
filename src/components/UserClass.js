import React, { useCallback } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "",
        location: "",
        avatar_url: "dummy",
      },
    };
    // console.log("Child constructor called" + this.props.name);
  }
  async componentDidMount() {
    // console.log("Child Component did mount called" + this.props.name);
    const data = await fetch(
      "https://api.github.com/users/" + this.props.userName
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log("child render called" + this.props.name);
    return (
      <div className="user-card card row">
        <div className="col-4">
          <div className="card-body">
            {/* <h1>Count: {count}</h1> */}
            {/* <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
            className=" btn btn-info btn-sm"
          >
            count increase
          </button> */}

            <h5>Name: {name}</h5>
            <h5>Location: {location}</h5>
            <h5>Contact: {this.props.email}</h5>
          </div>
        </div>
        <div className="col-4">
          <img src={avatar_url} />
        </div>
        <div className="col-4"></div>
      </div>
    );
  }
}

export default UserClass;

// // Mounting life Cycle
//  constructor (dummy)
// Render (dummy)
// componentDidmount
//    api useCallback
//    this.setState

//    --update Cycle
//    render
//    html loaded

//    componentDidUpdatw

/** 
 *  Mounting life Cycle
 *   constructor dummy
 *    render
 *    ComponentDidMount
 *        api call
 *        this.setState
 *    update cycle
 *   render
 * html loaded
 * ComponentDidUpdated Called
  
 */
