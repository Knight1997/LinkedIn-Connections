import React from "react";
import Profile from "./Profile";
import { MdDelete, MdSend } from "react-icons/md";
export default function ConnectionsList({
  Connections,
  handleClearList,
  handleEditProfile,
  handleDeleteProfile,
  handleClickURL,
  handleSort,
}) {
  return (
    <div>
      <div>
        <button type="submit" className="btn sort-btn" onClick={handleSort}>
          Sort by exp
          <MdSend className="btn-icon" />
        </button>
      </div>
      <ul className="list">
        {Connections.map((connection) => {
          return (
            <Profile
              key={connection.id}
              connection={connection}
              handleDeleteProfile={handleDeleteProfile}
              handleEditProfile={handleEditProfile}
              handleClickURL={handleClickURL}
            />
          );
        })}
      </ul>
      {Connections.length > 0 && (
        <button className="btn" onClick={() => handleClearList()}>
          Clear List
          <MdDelete className="btn-icons" />
        </button>
      )}
    </div>
  );
}
