import Input from "./Input";
import React from "react";
export default function Resistration() {
  return (
    <form className="form">
      <h1>Registration</h1>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="Re Enter Password" />
      <button type="button"> Register</button>
    </form>
  );
}
