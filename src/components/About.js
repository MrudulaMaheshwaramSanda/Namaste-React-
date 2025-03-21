import User from "./User";
import UserClass from "./UserClass.js";
import {Component} from "react";

//Class component
class About extends Component {

    constructor(props){ //First constructor is called
        super(props);
    }

    componentDidMount(){  //after child parent componentDidMount this is called
         

    }

    render() { //2nd render is called =>3rd goes to userclass
        return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste react web series</h2>
            {/* //1st child class Instance 1 */}
            {/* <UserClass name={"Mrudula M S"} location={"Hyderabad Telangana"}/>  */}
            <UserClass />
            {/* //2st child class Instance 2
            <UserClass name={"Elon Musk"} location={"Washington DC"}/> */}

        </div>
       );
    }
}

// const About = () => {
//    return(<div>
//         <h1>About</h1>
//             <h2>This is Namaste react web series</h2>
//             <UserClass name={"Mrudula M S"} location={"Hyderabad Telangana"}/>
//     </div>
//    );
// }

export default About;

// parent  
//     constructor
//     rende
// child1 
//     constructor
//     render
// child2
//     constructor 
//     render
//Commit Phase (DOM manupulation in single batch)
    // child1 componentDidMount
    // child2 componentDidMount
// parent componentDidMount