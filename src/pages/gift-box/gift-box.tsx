import {useState, type FC} from "react";

import {CurvedLoop} from "./curved-loop-text";
import {Letter} from "./letter";
import type {PageFinishProps} from "../../types";

import giftBoxFrontImg from "/src/assets/gift-box-front.png";
import capybaraImg from "/src/assets/capybara.png";
import giftBoxImg from "/src/assets/gift-box.png";

import styles from "./styles.module.scss";

export const GiftBox: FC<PageFinishProps> = ({nextRoute}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <CurvedLoop 
        marqueeText="С ✦ Днем ✦ Рождения ✦ Самого ✦ Лучшего ✦ Человека! ✦"
        speed={2}
        curveAmount={200}
        direction="right"
      />

      <div
        className={`${styles.gift} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(true)}
      >

        <img
          src={giftBoxFrontImg}
          className={styles.boxFront}
          alt=""
          draggable={false}
        />

        <img
          src={capybaraImg}
          className={styles.lid}
          alt=""
          draggable={false}
        />

        <img
          src={giftBoxImg}
          className={styles.box}
          alt=""
          draggable={false}
        />
      </div>

      <Letter isOpen={isOpen} nextRoute={nextRoute} />
    </div>
  );
}