import React from "react";
import Profile from "./Profile";
import { MdDelete } from "react-icons/md";
export default function ConnectionsList({ Connections }) {
  return (
    <div>
      hello ConnectionsList
      <ul className="list">
        {Connections.map((connection) => {
          return <Profile key={connection.id} connection={connection} />;
        })}
      </ul>
      {Connections.length > 0 && (
        <button className="btn">
          Clear List
          <MdDelete className="btn-icons" />
        </button>
      )}
    </div>
  );
}
