import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>React</h1>
      {/* <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Devices name="Laptop" price ="10,000" warranty ="1Year"></Devices>
      <Devices name="Mouse" price ="10,000" warranty ="1Year"></Devices>
      <Devices name="Pen" price ="10,000" warranty ="1Year"></Devices>

      <Devices2 name={"Fridge"} price={"10000"} country={"Bangladesh"}></Devices2>
    
      <Devices2 name={"TV"} price={"10000"} country={"Bangladesh"}></Devices2> */}

      <Todo task={"learn react"} isDone={true}></Todo>
      <Todo task={"Help people"} isDone={false}></Todo>
      <Todo task={"Get rich"} isDone={true}></Todo>
    </>
  );
}

function Person() {
  const age = 22;
  const address = "Chandpur";
  const person = {
    name: "Fahad Hossain Babor",
    varsity: "RUET",
  };
  return (
    <>
      <h3>
        I am a {person.name}. My {age} years old. I am from {address} +{" "}
        {person.varsity}{" "}
      </h3>
    </>
  );
}

function Student() {
  return (
    <div className="student">
      <h3>Name:</h3>
      <small>Age:</small> <br />
      <small>ID: </small>
    </div>
  );
}

function Developer() {
  const devuStyle = {
    margin: "20px",
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "15px",
  };
  return (
    <div style={devuStyle}>
      <h5>Devo Devo</h5>
    </div>
  );
}

function Devices(props) {
  console.log(props);
  return (
    <div className="student">
      <h2>Device name: {props.name} </h2>
      <h3>Price: {props.price} </h3>
      <h5>Warranty: {props.warranty} </h5>
    </div>
  );
}

function Devices2({ price, name, country }) {
  return (
    <div className="student">
      <h2>Device:{name}</h2>
      <h3>Price:{price}</h3>
      <h3>Country:{country}</h3>
    </div>
  );
}
export default App;
