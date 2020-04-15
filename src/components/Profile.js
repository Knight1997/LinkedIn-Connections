import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
export default function Profile({
  connection,
  handleEditProfile,
  handleDeleteProfile,
}) {
  const { id, Name, Company, Experience } = connection;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{Name}</span>
        <span className="amount">{Company}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="Edit Button"
          onClick={() => handleEditProfile(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="Clear Button"
          onClick={() => handleDeleteProfile(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
}
