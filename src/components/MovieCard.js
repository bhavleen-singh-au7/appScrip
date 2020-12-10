import React from "react";

const MovieCard = () => {
  return (
    <div className="bg-danger my-4">
      <div className="row">
        <div className="col-4">
          <img
            alt="image_poster"
            width="130%"
            src={`${process.env.REACT_APP_BASE_IMAGE_URL}/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg`}
          />
        </div>
        <div className="col-7 text-center text-light">
          <p>
            <strong>Movie Name: </strong>
            Wonder Woman
          </p>
          <p>
            <strong>Release Date: </strong>
            2016/10/01
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
