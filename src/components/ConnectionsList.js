import React from "react";
import Profile from "./Profile";
import { MdDelete } from "react-icons/md";
export default function ConnectionsList({
  Connections,
  handleClearList,
  handleEditProfile,
  handleDeleteProfile,
}) {
  return (
    <div>
      <ul className="list">
        {Connections.map((connection) => {
          return (
            <Profile
              key={connection.id}
              connection={connection}
              handleDeleteProfile={handleDeleteProfile}
              handleEditProfile={handleEditProfile}
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
