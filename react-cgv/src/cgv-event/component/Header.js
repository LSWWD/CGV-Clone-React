import { FiPauseCircle } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useState } from "react";

const Header = ({ stop }) => {
  const [toggle, setToggle] = useState(true);
  const onClick = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div>
      <div className="event-header">
        <div className="event-header__text">
          <span>EVENT</span>
        </div>
        <div className="event-header__btn">
          <button className="stop-btn" onClick={onClick}>
            {toggle === true ? (
              <FiPauseCircle onClick={stop} />
            ) : (
              <AiOutlinePlayCircle onClick={stop} />
            )}
          </button>
          <button className="text-btn">
            <span>전체보기</span>
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
