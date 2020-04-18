import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import ConnectionsForm from "./components/ConnectionsForm";
import ConnectionsList from "./components/ConnectionsList";
import uuid from "uuid/v4";
const initalConnections = [
  {
    id: uuid(),
    Name: "Ram",
    Company: "Tower",
    experience: 1,
    url: "https://www.linkedin.com/in/utkarshsinha97/",
  },
  {
    id: uuid(),
    Name: "jam",
    Company: "Estee",
    experience: 5,
    url: "https://www.linkedin.com/in/utkarshsinha97/",
  },
  {
    id: uuid(),
    Name: "sam",
    Company: "De Shaw",
    experience: 3,
    url: "https://www.linkedin.com/in/utkarshsinha97/",
  },
];
let initialConnections = initalConnections;
// let initialConnections = localStorage.getItem("MyConnections")
//   ? JSON.parse(localStorage.getItem("MyConnections"))
//   : initalConnections;

//console.log(initalConnections);
function App() {
  const [Connections, setConnections] = useState(initialConnections);
  const [PersonName, setPersonName] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  const [url, setUrl] = useState("");
  const [experience, setExperience] = useState("");

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

  const handleExperience = (e) => {
    setExperience(e.target.value);
  };

  const handleURL = (e) => {
    setUrl(e.target.value);
  };

  const handleClickURL = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  const handleSort = () => {
    const finalConnections = [...Connections];
    finalConnections.sort(
      (connection_1, connection_2) =>
        parseInt(connection_1.experience) - parseInt(connection_2.experience),
      setConnections(finalConnections)
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (PersonName === "" || CompanyName === "" || url === "") {
      handleAlert({ type: "danger", text: "Item Can't be added!" });
      return;
    }
    if (edit) {
      let finalConnections = Connections.map((profile) => {
        return profile.id === id
          ? {
              ...profile,
              Name: PersonName,
              Company: CompanyName,
              url: url,
              experience: experience,
            }
          : profile;
      });
      setConnections(finalConnections);
      setEdit(false);
    } else {
      const newConnection = {
        id: uuid(),
        Name: PersonName,
        Company: CompanyName,
        experience: experience,
        url: url,
      };
      setConnections([newConnection, ...Connections]);
    }
    setCompanyName("");
    setPersonName("");
    setUrl("");
    setExperience("");
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
    setUrl(connection.url);
    setExperience(connection.experience);
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
          url={url}
          experience={experience}
          handleCompanyName={handleCompanyName}
          handlePersonName={handlePersonName}
          handleURL={handleURL}
          handleOnSubmit={handleOnSubmit}
          handleExperience={handleExperience}
          edit={edit}
        />
        {Connections.length>0 && <ConnectionsList
          Connections={Connections}
          handleClearList={handleClearList}
          handleDeleteProfile={handleDeleteProfile}
          handleEditProfile={handleEditProfile}
          handleClickURL={handleClickURL}
          handleSort={handleSort}
        />}
      </main>
      <h1>
        Total Experience:{" "}
        <span className="total">
          {Connections.reduce((acc, curr) => {
            return (acc += curr.experience ? parseInt(curr.experience) : 0);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
