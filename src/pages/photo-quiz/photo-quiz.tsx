import {useState, type FC} from "react";
import {useNavigate} from "react-router-dom";

import {CustomPage} from "../../components/custom-page";
import {CustomButton} from "../../components/custom-button";
import {CustomModal} from "../../components/custom-modal";
import type {PageFinishProps} from "../../types";

import styles from "./styles.module.scss";

import img1 from "/src/assets/quiz/1.webp";
import img2 from "/src/assets/quiz/2.webp";
import img3 from "/src/assets/quiz/3.webp";
import img4 from "/src/assets/quiz/4.webp";

const QUESTIONS = [
  {
    id: 1,
    img: img1,
    options: ["Национальная библиотека Минска", "Этажи", "Лахта Центр"],
    correct: 0,
  },
  {
    id: 2,
    img: img2,
    options: ["Asiatiq", "Animals", "Nobel"],
    correct: 2,
  },
  {
    id: 3,
    img: img3,
    options: ["Наб. реки Смоленки", "Большая морская", "Обводный канал"],
    correct: 0,
  },
  {
    id: 4,
    img: img4,
    options: ["Новая Голландия", "Севкабель", "Елагин остров"],
    correct: 1,
  },
];

export const PhotoQuiz: FC<PageFinishProps> = ({nextRoute}) => {
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const select = (_: number, i: number) => {
    if (selected !== null) return;
    setSelected(i);
    setTimeout(() => setShowResult(true), 300);
  };

  const next = () => {
    if (active + 1 < QUESTIONS.length) {
      setActive(active + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  return (
    <CustomPage title="Задание два - фото квиз">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Пусть ты еще совсем молодая, но проверить память никогда не помешает :) <br />
          Посмотри на фото ниже и попробуй вспомнить, где они сделаны:
        </h1>

        <div className={styles.quizContainer}>
          {QUESTIONS.map((q, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                active === index ? styles.activeSlide : ""
              }`}
            >
              <div className={styles.photoBox}>
                <img src={q.img} className={styles.photo} />
                <div className={styles.counter}>
                  Фото {index + 1} из {QUESTIONS.length}
                </div>
              </div>

              <div className={styles.options}>
                {q.options.map((opt, i) => {
                  const isCorrect = selected !== null && i === q.correct;
                  const isWrong = selected !== null && i === selected && i !== q.correct;

                  return (
                    <button
                      key={i}
                      className={`${styles.option} 
                        ${isCorrect ? styles.correct : ""}
                        ${isWrong ? styles.wrong : ""}`
                      }
                      onClick={() => select(index, i)}
                    >
                      {opt}
                    </button>
                  );
                })}

                {active === index && showResult && (
                  <>
                    <div className={styles.result}>
                      {selected === q.correct
                        ? "Правильно! ❤️"
                        : "Немного мимо 😊"}
                    </div>

                    {index === QUESTIONS.length - 1 ? (
                        <CustomButton title="Завершить" onClick={() => setModalOpen(true)} />
                      )
                      : (
                        <CustomButton title="Следующее фото" onClick={next} />
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <CustomModal
        open={isModalOpen}
        onClose={() => {
          navigate(nextRoute);
          setModalOpen(false);
        }}
        svgName="cat-wow.gif"
        message='Вот это да, с памятью у тебя все в порядке! Впрочем, как и ожидалось :) Это заслуживает подарка!'
      />
    </CustomPage>
  );
}