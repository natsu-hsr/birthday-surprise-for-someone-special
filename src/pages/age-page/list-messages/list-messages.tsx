import {useState} from "react";

import styles from "./styles.module.scss";

const ACHIEVEMENTS = [
  "После школы не побоялась уехать учиться в другую страну",
  "Окончила престижный вуз и поступила на магистратуру",
  "Совмещаешь работу с учебой и уже полностью независима",
  "Не смотря на множество сложностей, всегда прекрасно выглядишь!",
  "Идёшь к тому, чтобы построить жизнь, о которой мечтаешь",
  "Стала самым важным человеком для меня ❤️",
  "И зная тебя, дальше будет только больше :)",
];

export const ListMessages = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className={styles.wrapper}>
      {ACHIEVEMENTS.map((text, index) => {
        const open = revealed[index];

        return (
          <div
            key={index}
            className={`${styles.card} ${open ? styles.revealed : ""}`}
            onClick={() =>
              setRevealed((prev) => ({ ...prev, [index]: true }))
            }
          >
            <div className={styles.number}>{index + 1}</div>

            <div className={styles.textWrapper}>
              <p className={styles.text}>{text}</p>
              <div
                className={`${styles.blurOverlay} ${
                  open ? styles.hidden : ""
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}