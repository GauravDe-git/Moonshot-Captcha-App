import React from "react";
import  ReactDOM  from "react-dom/client";
import SignupForm from "./components/SignupForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return(
        <div>
            <SignupForm/>
        </div>
    )
}

root.render(<App/>)