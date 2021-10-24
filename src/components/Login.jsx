import Input from "./Input";
import React from "react";
export default function Login() {
  return (
    <form className="form">
      <h1>Login</h1>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="password" />
      <button type="button">Login</button>
    </form>
  );
}
