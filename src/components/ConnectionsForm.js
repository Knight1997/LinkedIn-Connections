import React from "react";
import { MdSend } from "react-icons/md";
export default function ConnectionsForm({
  PersonName,
  CompanyName,
  handlePersonName,
  handleCompanyName,
  handleOnSubmit,
  handleExperience,
  handleURL,
  url,
  experience,
  edit,
}) {
  return (
    <form autocomplete="off" onSubmit={handleOnSubmit}>
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
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="LinkedInURL">LinkedIn Profile</label>
          <input
            type="text"
            className="form-control"
            id="LinkedInURL"
            name="LinkedInURL"
            placeholder="profile url"
            value={url}
            onChange={handleURL}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Experience">Experience(Years)</label>
          <input
            type="text"
            className="form-control"
            id="Experience"
            name="Experience"
            placeholder="e.g. 2"
            value={experience}
            onChange={handleExperience}
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
