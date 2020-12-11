import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";
import axios from "axios";

const App = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [movieId, setMovieId] = useState("");
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const axiosReq = async () => {
      if (movieId) {
        const res = await axios(
          `${process.env.REACT_APP_BASE_URL}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setMovieData(res.data);
      }
    };
    axiosReq();
  }, [movieId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const fetchResult = await axios(
      `${process.env.REACT_APP_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`
    );

    setResponse(fetchResult.data.results);
    setLoading(false);
  };

  return (
    <Fragment>
      <Navbar
        handleSubmit={submitHandler}
        text={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="d-flex">
        <div>
          <Sidebar
            response={response}
            loading={loading}
            getMovieId={(mId) => setMovieId(mId)}
          />
        </div>
        <div className="bg container shadow-lg">
          <Details
            movieData={movieData}
            loading={loading}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
