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
  const leftBtn = useRef();
  const rightBtn = useRef();

  // 오른쪽 버튼
  const onRightClick = () => {
    boxIndex++;
    boxIndex = boxIndex >= movies.length / 3 ? boxIndex - 1 : boxIndex;
    slide.current.style.marginLeft = `-${sliderWidth * boxIndex}px`;
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
      slide.current.style.animationPlayState = "paused";
      slide.current.style.animation = "none";
      leftBtn.current.style.visibility = "visible";
      rightBtn.current.style.visibility = "visible";
    } else {
      slide.current.style.animationPlayState = "running";
      slide.current.style.animation = "makeRoll 10s ease-in";
      leftBtn.current.style.visibility = "hidden";
      rightBtn.current.style.visibility = "hidden";
    }
  };

  // 인터벌로 반복할 함수

  return (
    <div>
      <div className="event">
        <div className="event__box">
          <button id="left-btn" onClick={onLeftClick} ref={leftBtn}>
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
          <button id="right-btn" onClick={onRightClick} ref={rightBtn}>
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
