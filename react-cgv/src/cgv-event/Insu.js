import "./event.css";
import movieList from "./event.json";

import Container from "./component/Container";
import Header from "./component/Header";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Event = () => {
  const [movies, setMovies] = useState([]);
  const sliderWidth = 1005;
  let toggle = true;
  let boxIndex = 0;
  useEffect(() => {
    setMovies(movieList.movies);
  }, []);

  // DOM 불러오기
  const slide = useRef();

  // 오른쪽 버튼
  const onRightClick = () => {
    boxIndex++;
    boxIndex = boxIndex >= movies.length / 3 ? boxIndex - 1 : boxIndex;
    slide.current.style.marginLeft = `-${sliderWidth * boxIndex}px`;
    clearInterval(interval);
  };
  // 왼쪽 버튼
  const onLeftClick = () => {
    console.log("Click");
    boxIndex--;
    boxIndex = boxIndex < 0 ? 0 : boxIndex;
    slide.current.style.marginLeft = `-${sliderWidth * boxIndex}px`;
  };

  const onStop = () => {
    toggle = !toggle;
    console.log(toggle);
    if (toggle === false) {
      clearInterval(interval);
    } else {
      clearInterval(interval);
      interval = repeat();
    }
  };

  // 인터벌로 반복할 함수
  let repeat = () =>
    setInterval(() => {
      boxIndex++;
      boxIndex = boxIndex >= movies.length / 3 ? 0 : boxIndex;
      slide.current.style.marginLeft = `-${sliderWidth * boxIndex}px`;
    }, 3000);
  let interval = repeat();
  clearInterval(interval);

  return (
    <div>
      <div className="event">
        <div className="event__box">
          <button id="left-btn" onClick={onLeftClick}>
            <FaLessThan />
          </button>

          <div className="event__box__outer">
            <Header stop={onStop} toggle={toggle} />
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
