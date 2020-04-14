import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import ConnectionsForm from "./components/ConnectionsForm";
import ConnectionsList from "./components/ConnectionsList";
import uuid from "uuid/v4";
const initalConnections = [
  { id: uuid(), Name: "Ram", Company: "Tower", exp: 1 },
  { id: uuid(), Name: "jam", Company: "Estee", exp: 5 },
  { id: uuid(), Name: "sam", Company: "De Shaw", exp: 3 },
];

//console.log(initalConnections);
function App() {
  const [Connections, setConnections] = useState(initalConnections);
  // console.log(Connections);
  // console.log(setConnections);
  return (
    <>
      <Alert />
      <h1>LinkedIn Connections</h1>
      <main className="App">
        <ConnectionsForm />
        <ConnectionsList Connections = {Connections}/>
      </main>
      <h1>
        Total Connections:{" "}
        <span className="total">
          {Connections.reduce((acc, curr) => {
            return (acc += curr.exp);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
