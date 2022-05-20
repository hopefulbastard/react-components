import "./buttons.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Buttons = () => {
  return (
    <div className="buttonslist">
      <a href="#" className="button">
        <FontAwesomeIcon
          className="buttonimg"
          icon="fa-solid fa-bezier-curve"
        />
        <h2>Design</h2>
      </a>

      <a href="#" className="button">
        <FontAwesomeIcon
          className="buttonimg"
          icon="fa-solid fa-bezier-curve"
        />
        <h2>Design</h2>
      </a>
    </div>
  );
};

export default Buttons;
