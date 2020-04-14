import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import ConnectionsForm from "./components/ConnectionsForm";
import ConnectionsList from "./components/ConnectionsList";
import uuid from "uuid/v4";
const initalConnections = [
  { id: uuid(), Name: "Ram", Company: "Tower" },
  { id: uuid(), Name: "jam", Company: "Estee" },
  { id: uuid(), Name: "sam", Company: "De Shaw" },
];

//console.log(initalConnections);
function App() {
  const [Connections, setConnections] = useState(initalConnections);
  console.log(Connections);
  console.log(setConnections);
  return (
    <>
      <Alert />
      <ConnectionsForm />
      <ConnectionsList />
    </>
  );
}

export default App;
