import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import React from "react";
// const About2=()=>{
// return (
//     <>

//     <h1>About Us Page</h1>
//     <p>This is my task to learn how to handle path</p>

//     <Outlet></Outlet>
//     <Profile name={"Akshay Class"} ></Profile>  {/* how to pass props in class based*/}

//     </>
// )
// }

/*
Two types of routing: client side and server side
client side: react uses it, we dont go to server to fetch page(we dont want to load anything from server)
server side:page come from server
*/

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ////("component did mount called")   /* this lifecycle method gets called when the component is mounted */
  }

  render() {
    return (
      <>
        <h1>About Us Page</h1>
        <p>This is my task to learn how to handle path</p>
        <Outlet></Outlet>
        <Profile name={"Akshay Class"}></Profile>{" "}
        {/* how to pass props in class based*/}
      </>
    );
  }
}

export default About;

// VVI LIFECYCLE:-
// Parent-constructor->Parent-render->Child-Constructor->Child-render->Child-componentDidMount ->Parent-ComponentDidMount

/*
Parent -Constructor
Parent -Render
    First Child-Constructor
    First Child-Render
    Second Child-Constructor
    Second Child-Render      //now dom is updated hence commit phase started
    First Child-ComponentDidMount
    Second Child-ComponentDidMount
Parent -ComponentDidMount

-------------------------
TWO PHASES:

Render Phase: Constructor,Render
Commit Phase: Updates DOM and componentDidMount

------------------------------
Note: async fucntions will come after
*/
