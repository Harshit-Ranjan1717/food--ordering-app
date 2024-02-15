import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.state={ //create state
    //     count:5,
    //     count2:10,
    // }
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    //life Cycle Methods
    //Api calls
    // //("it will be called after first render");

    const data = await fetch("https://api.github.com/users/Harshit-Ranjan1717");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    //("after every next render or update ");
  }

  componentWillUnmount() {
    //("this will be called just before unmounting when we go to other page ");
    //clean your mess here
  }

  //now we all can do these easily by functional components woahh !! what a relief

  render() {
    return (
      <>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>Name: {this.state.userInfo.name}</h2> {/* this is the way*/}
        <h2>Location : {this.state.userInfo.location}</h2>
      </>
    );
  }
}

export default Profile;

// //() first of contsructor then of render then of componentDidMount
//where to call api: ComponentDidMount

//------------------------------------------------
// useEffect k andar return : way of unmounting clear interval here means page change pe kaam karega
