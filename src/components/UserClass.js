//Class based component
import React from "react";

class UserClass extends React.Component{

    constructor(props){ //1st called
        super(props);

        this.state = { //Creating state variables
           userInfo: {
            name: "Dummy Name",
            location:"Default",
            avatar_url:"http://DummyPhoto"
           },
        }

    }

    //mount cycle
    async componentDidMount(){ //child componentDidMount is called 
    //API call is done inside this method

    const data = await fetch("https://api.github.com/users/MrudulaMaheshwaramSanda");

    const json = await data.json();

    console.log(json);

    this.setState({
        userInfo: json,
    }
    );

    //Will be mounted at start of page
    // this.timer = setInterval(()=>{
    //     console.log("Namaste");
    // }
    // , 1000);

    }

    //WIll be called in Update Cycle
    componentDidUpdate(){
        // When state variable is updated
        //when setState is called

    }

    //unmount cycle
    // componentWillUnmount(){
    ///removing component from page ==> this will be called when we move to another page like (contact us page)
    //     clearInterval(this.timer); //interval will be removed once we move to another page
    // }


    render(){ //2nd called
        // const {name, location} = this.props; //Destructuring
        return (
            <div className="userCard"> 
            <img src = {this.state.userInfo.avatar_url} />
                {/* <h1>Count: {this.state.count}</h1>
                <h1>Count2: {this.state.count2}</h1> */}
                {/* <button onClick = {
                    () =>
                    {
                        this.setState( //Method to update state variables that has to contain an object
                            {
                                count: this.state.count + 1,
                                count2: this.state.count2 + 1,
                            }
                        )
                    }
                }>
                    click
                </button> */}

                <h1>Name: {this.state.userInfo.name}</h1>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h3>Contact: mrmahesh@ttu.edu</h3>
        </div>

        );
    }
}

export default UserClass;

// Mounting life cycle
    // Constructor   
    // Render with Dummy data
    // <HTML will have dummy data>
    // component did mount is called
    //     API call
    //     set state - state variable is updated

// Update Cycle 
//     Render with API data
//     <HTmL will  have API data>
//     componenyDidUpdate will be called
