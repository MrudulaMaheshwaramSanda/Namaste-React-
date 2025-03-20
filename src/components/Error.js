//Creating Own Error Page when we give a path other than defined

import { useRouteError } from "react-router-dom"; //it is a hook that gives more info about error

const Error = () => {
    const err = useRouteError();
    console.log(err); //displays y there is an error


    return (
        <div>
            <h1>Oops....</h1>
             <h2>Something Went Wrong....</h2>
             <h2>Please try again....!!!!</h2>
             <h2>{err.status} {err.statusText}</h2>
             <h3>{err.data}</h3>
        </div>);
}

export default Error;