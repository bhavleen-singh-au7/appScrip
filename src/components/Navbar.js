import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <div className="navbar-brand text-light">
            <strong>Movies React App</strong>
          </div>
          <form className="m-auto">
            <input
              type="search"
              placeholder="Search"
              className="mt-2 form-control"
            />
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
