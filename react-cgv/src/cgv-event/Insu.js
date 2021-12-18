import "./event.css";
import movieList from "./event.json";

import Container from "./component/Container";
import Header from "./component/Header";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Event = () => {
  const [movies, setMovies] = useState([]);
  let boxIndex = 0;
  useEffect(() => {
    setMovies(movieList.movies);
  }, []);
  const onRightClick = () => {
    console.log("Click");
    boxIndex++;
    boxIndex = boxIndex >= movies.length / 3 ? boxIndex - 1 : boxIndex;
    slide.current.style.marginLeft = `-${1005 * boxIndex}px`;
  };

  const onLeftClick = () => {
    console.log("Click");
    boxIndex--;
    boxIndex = boxIndex < 0 ? 0 : boxIndex;
    slide.current.style.marginLeft = `-${1005 * boxIndex}px`;
  };

  const slide = useRef(null);

  return (
    <div>
      <div className="event">
        <div className="event__box">
          <button id="left-btn" onClick={onLeftClick}>
            <FaLessThan />
          </button>
          <div className="event__box__outer">
            <Header />
            <div className="event-container">
              <div className="event-container__slide" ref={slide}>
                <div>
                  <Container movies={movies} />
                </div>
              </div>
            </div>
          </div>
          <button id="right-btn" onClick={onRightClick}>
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
