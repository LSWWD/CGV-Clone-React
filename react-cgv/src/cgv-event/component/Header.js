import { FiPauseCircle } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="event-header">
        <div className="event-header__text">
          <span>EVENT</span>
        </div>
        <div className="event-header__btn">
          <button>
            <FiPauseCircle />
          </button>
          <button>
            <span>전체보기</span>
            <FaGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
