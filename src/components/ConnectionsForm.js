import React from "react";
import { MdSend } from "react-icons/md";
export default function ConnectionsForm({
  PersonName,
  CompanyName,
  handlePersonName,
  handleCompanyName,
  handleOnSubmit,
  edit,
}) {
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="PersonName">Person Name</label>
          <input
            type="text"
            className="form-control"
            id="PersonName"
            name="PersonName"
            placeholder="e.g. Utkarsh"
            value={PersonName}
            onChange={handlePersonName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="CompanyName">Company</label>
          <input
            type="text"
            className="form-control"
            id="CompanyName"
            name="CompanyName"
            placeholder="e.g. Amazon"
            value={CompanyName}
            onChange={handleCompanyName}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
}
