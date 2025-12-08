import {Button} from "@mui/material";
import type {FC} from "react";
import {useNavigate} from "react-router-dom";

import styles from "./styles.module.scss";

type CardProps = {
  isOpen: boolean;
  nextRoute: string;
}

export const Card: FC<CardProps> = ({isOpen, nextRoute}) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.card} ${isOpen ? styles.cardVisible : ""}`}>
      <div className={styles.cardContent}>
        <h1 className={styles.title}>
          С днём рождения!
      </h1>

      <div className={styles.desc}>
        Сегодня у тебя особенный день, и я<br />
        Сегодня у тебя особенный день, и пусть я и не смогу провести его рядом с тобой, чтобы сделать его немного теплее я сделал этот сайт<br />
        Я подготовил маленькое путешествие — серию заданий, связанных с тобой. <br />
        Пройди всё до конца и тебя будет ждать подарок, который я сделал специально для тебя. 💛
      </div>

      <Button onClick={() => navigate(nextRoute)}>
        Начать
      </Button>
      </div>
    </div>
  );
}