import {useState, type FC} from "react";

import {CurvedLoop} from "./curved-loop-text";
import {Letter} from "./letter";
import type {PageFinishProps} from "../../types";

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
          src="/src/assets/gift-box-front.png"
          className={styles.boxFront}
          alt=""
          draggable={false}
        />

        <img
          src="/src/assets/capybara.png"
          className={styles.lid}
          alt=""
          draggable={false}
        />

        <img
          src="/src/assets/gift-box.png"
          className={styles.box}
          alt=""
          draggable={false}
        />
      </div>

      <Letter isOpen={isOpen} nextRoute={nextRoute} />
    </div>
  );
}