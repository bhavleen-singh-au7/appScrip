import React, { Fragment } from "react";

const Navbar = ({handleSubmit}) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <div className="navbar-brand text-light">
            <strong>Movies React App</strong>
          </div>
          <form className="m-auto" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              className="mt-2 form-control"
              autoFocus
            />
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
