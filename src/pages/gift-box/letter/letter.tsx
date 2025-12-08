import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {CustomButton} from '../../../components/custom-button';

import styles from './styles.module.scss';

type LetterProps = {
  isOpen: boolean;
  nextRoute: string;
}

export const Letter: FC<LetterProps> = ({isOpen, nextRoute}) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.card} ${isOpen ? styles.cardVisible : ""}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Вам письмо!</h1>

        <p className={styles.subtitle}>
          С днем рождения! 🎉🎉🎉
        </p>

        <p className={styles.text}>
          Сегодня у тебя особенный день. И пусть я и не могу провести его рядом с тобой,
          чтобы сделать этот день чуть теплее я создал этот сайт.
        </p>

        <p className={styles.text}>
          Впереди тебя ждет пара заданий, проверка памяти и много теплых слов.
          Но главное, что всё это я сделал специально для тебя, и от чистого сердца.
          Так что, если готова, нажимай кнопку ниже и поехали :)
        </p>

        <CustomButton title='Начать путешествие!' onClick={() => navigate(nextRoute)} />
      </div>
    </div>
  );
}