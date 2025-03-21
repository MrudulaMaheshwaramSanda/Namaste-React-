// Functional Component

// import {useState} from "react";

// const User = (props) => {
//     const [count] = useState(0);
//     const[count2] = useState(1);

//     useEffect (()=>{
//         const timer=setInterval(()=>{
//             console.log("Namaste");
//         }, 1000);

//         return (()=>{
//             clearInterval(timer); //timer will be cleared when we go to another page, ift this is avoided them timer will continue even if we go to another page
//         })
//     },[])



//     return (<div className="userCard">
//         <h1>Count = {count}</h1> 
//         <h1>Count = {count2}</h1>
//         <h1>Name: {props.name}</h1>
//         <h3>Location: Hyderabad</h3>
//         <h3>Contact: mrmahesh@ttu.edu</h3>
//     </div>)
// }

// export default User;