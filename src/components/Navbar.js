import React, { Fragment } from "react";

const Navbar = ({ handleSubmit, value, onChange }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-nav">
        <div className="container">
          <div className="navbar-brand text-light">
            <strong>Movies React App</strong>
          </div>
          <form className="m-auto" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search Movies"
              className="mt-2 form-control bg-text text-light font-weight-bold"
              value={value}
              onChange={onChange}
              autoFocus
            />
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
