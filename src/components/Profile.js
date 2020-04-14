import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
export default function Profile({ connection }) {
  const { id, Name, Company, Experience } = connection;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{Name}</span>
        <span className="amount">{Company}</span>
      </div>
      <div>
        <button className="edit-btn" aria-label="Edit Button">
          <MdEdit />
        </button>
        <button className="clear-btn" aria-label="Clear Button">
          <MdDelete />
        </button>
      </div>
    </li>
  );
}
