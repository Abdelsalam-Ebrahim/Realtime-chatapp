import "./login.css";
import SignIn from "./Signin/Signin";
import Signup from "./Signup/Signup";
import { useState } from "react";

export default function Login () {

    const [ logged, setLogged ] = useState(true);

    function goSignUp() {
        setLogged(!logged);
    }

    return <>

        <div className="login">

            { logged ?  <SignIn goSignUp={goSignUp} />: <Signup setLogged={ setLogged } /> }

            {/* <div className="separator"></div> */}
            {/* <Signup /> */}

        </div>
    
    </>
}
