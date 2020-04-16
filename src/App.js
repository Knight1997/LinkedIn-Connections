import React, { useState, useEffect } from "react";
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
let initialConnections = initalConnections;
// let initialConnections = localStorage.getItem("MyConnections") ? JSON.parse(localStorage.getItem("MyConnections")) : initalConnections;

//console.log(initalConnections);
function App() {
  const [Connections, setConnections] = useState(initialConnections);
  const [PersonName, setPersonName] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("MyConnections", JSON.stringify(Connections));
  }, [Connections]);
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
    if (edit) {
      let finalConnections = Connections.map((profile) => {
        return profile.id === id
          ? { ...profile, Name: PersonName, Company: CompanyName }
          : profile;
      });
      setConnections(finalConnections);
    } else {
      const newConnection = {
        id: uuid(),
        Name: PersonName,
        Company: CompanyName,
        exp: 1,
      };
      setConnections([...Connections, newConnection]);
    }
    setCompanyName("");
    setPersonName("");
    if (edit) handleAlert({ type: "success", text: "Item Edited!" });
    else handleAlert({ type: "success", text: "Item added!" });
  };

  const handleClearList = () => {
    setConnections([]);
    handleAlert({ type: "success", text: "All Connections Deleted!" });
  };
  const handleEditProfile = (profileId) => {
    setEdit(true);
    setId(profileId);
    let connection = Connections.find((profile) => profile.id === profileId);
    setPersonName(connection.Name);
    setCompanyName(connection.Company);
  };

  const handleDeleteProfile = (id) => {
    let finalConnections = Connections.filter((item) => item.id !== id);
    setConnections(finalConnections);
    handleAlert({ type: "success", text: "Item Deleted!" });
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>
        Linked
        <span
          style={{
            background: "#0e76a8",
          }}
        >
          In
        </span>{" "}
        Connections
      </h1>
      <main className="App">
        <ConnectionsForm
          PersonName={PersonName}
          CompanyName={CompanyName}
          handleCompanyName={handleCompanyName}
          handlePersonName={handlePersonName}
          handleOnSubmit={handleOnSubmit}
          edit={edit}
        />
        <ConnectionsList
          Connections={Connections}
          handleClearList={handleClearList}
          handleDeleteProfile={handleDeleteProfile}
          handleEditProfile={handleEditProfile}
        />
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
