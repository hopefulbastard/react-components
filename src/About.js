import "./About.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTruckFast,
  faBoxesPacking,
  faClipboardList,
  faPhone,
  faBezierCurve,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faTruckFast,
  faBoxesPacking,
  faClipboardList,
  faPhone,
  faBezierCurve,
  faBook
);

const About = () => {
  return (
    <div className="aboutlist">
      <a className="about">
        <FontAwesomeIcon icon="faTruckFast" />
        <h2>On-time delivery</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.</p>
      </a>
    </div>
  );
};

export default About;
