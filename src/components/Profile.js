import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
export default function Profile({
  connection,
  handleEditProfile,
  handleDeleteProfile,
  handleClickURL,
}) {
  const { id, Name, Company, experience, url } = connection;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">
          {Name}
          <button
            className="linkedIn-btn"
            aria-label="Edit Button"
            onClick={() => handleClickURL(url)}
          >
            <AiFillLinkedin />
          </button>
        </span>
        <span className="company">{Company}</span>
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
