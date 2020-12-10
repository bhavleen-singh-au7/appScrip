import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="white container shadow-lg">
          <Details />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
