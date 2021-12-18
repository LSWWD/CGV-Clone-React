import "./event.css";
import movieList from "./event.json";

import Container from "./component/Container";
import Header from "./component/Header";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useState, useEffect } from "react";

const Event = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(movieList.movies);
  }, []);
  console.log(movies);
  return (
    <div>
      <div className="event">
        <div className="event__box">
          <button id="left-btn">
            <FaLessThan />
          </button>
          <div className="event__box__outer">
            <Header />
            <Container movies={movies} />
          </div>
          <button id="right-btn">
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
