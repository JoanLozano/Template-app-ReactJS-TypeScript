import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.gradient}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2022</p>
        </div>
        <div className={styles.social}>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="3x"
              style={{ color: "white" }}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="3x"
              style={{ color: "white" }}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="3x"
              style={{ color: "white" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
