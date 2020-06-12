import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import styles from "./houseCard.module.scss";
import pic from "../assets/house.png";
import arrowRight from "../assets/like.svg";

const HouseCard = ({ width, height }) => (
  <div className={cx(styles.card)} style={{ width: `${width || "400"}px` }}>
    <div className={styles.likeButton}>
      <FontAwesomeIcon className={styles.icon} icon={faHeart} />
    </div>
    <img alt="next" src={arrowRight} heigth="20" width="30" />
    <img className={styles.cardImage} alt="house" src={pic} />
    <div className={styles.description}>
      <div className={styles.title}>Grosvenor Square, Mayfair, London, W1K</div>
      <div className={styles.details}>
        <div className={styles.bedrooms}>
          <div>Bedrooms</div>
          <div>4</div>
        </div>
        <div className={styles.price}>£18,950,000</div>
        <div className={styles.contact}>
          <button>
            <FontAwesomeIcon icon={faShare} />
            Contact agent
          </button>
        </div>
        <div className={styles.share}>
          <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    </div>
  </div>
);

export default HouseCard;
