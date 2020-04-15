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
  const [PersonName, setPersonName] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handlePersonName = (e) => {
    setPersonName(e.target.value);
  };

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type: type, text: text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (PersonName === "" || CompanyName === "") {
      handleAlert({ type: "danger", text: "Item Can't be added!" });
      return;
    }
    const newConnection = {
      id: uuid(),
      Name: PersonName,
      Company: CompanyName,
      exp: 1,
    };
    setConnections([...Connections, newConnection]);
    setCompanyName("");
    setPersonName("");
    handleAlert({ type: "success", text: "Item added!" });
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>LinkedIn Connections</h1>
      <main className="App">
        <ConnectionsForm
          PersonName={PersonName}
          CompanyName={CompanyName}
          handleCompanyName={handleCompanyName}
          handlePersonName={handlePersonName}
          handleOnSubmit={handleOnSubmit}
        />
        <ConnectionsList Connections={Connections} />
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
