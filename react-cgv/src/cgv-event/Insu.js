import "./event.css";

import Container from "./component/Container";
import Header from "./component/Header";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Event = () => {
  return (
    <div>
      <div className="event">
        <div className="event__box">
          <button id="left-btn">
            <FaLessThan />
          </button>
          <div className="event__box__outer">
            <Header />
            <Container />
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
