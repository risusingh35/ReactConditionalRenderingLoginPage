import React from "react";
import Login from "./Login";
import Registration from "./registration";

var isRegister = 0; //change value 1 to 0 to see differnt result.

export default function App() {
  return (
    <div className="container">{isRegister ? <Registration /> : <Login />}</div>
    // <div className="container">
    //   {isLoggedIn===true&& <h1>Hello</h1>}
    // </div>
    //is only condition true code will render otherwise nothing will happed
  );
}
