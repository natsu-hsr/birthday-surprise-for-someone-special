
import {useState, type FC} from 'react';
import {JigsawPuzzle} from 'react-jigsaw-puzzle/lib/jigsaw-puzzle';
import {useNavigate} from 'react-router-dom';

import {CustomModal} from '../../components/custom-modal';
import {CustomPage} from '../../components/custom-page';
import type {PageFinishProps} from '../../types';

import styles from './styles.module.scss';

export const PuzzlePage: FC<PageFinishProps> = ({nextRoute}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <CustomPage title="Твое первое задание - пазл">
      <div className={styles.wrapper}>
        <p className={styles.desc}>
          На картинке ниже изображено кое-что, что ты очень хочешь. Перемещай плитки и собери пазл, чтобы пройти дальше
        </p>

        <div className={styles.card}>
          <div className={styles.puzzleBox}>
            <JigsawPuzzle
              imageSrc="/src/assets/puzzle-img.jpg"
              rows={3}
              columns={3}
              onSolved={() => {
                setTimeout(() => setOpen(true), 500);
              }}
            />
          </div>
        </div>
      </div>

      <CustomModal
        open={open}
        onClose={() => {
          navigate(nextRoute);
          setOpen(false);
        }}
        title='Просто великолепно!'
        svgName="cat-driving.gif"
        message='Не знаю, угадал ли с цветом, но с маркой точно угадал :)
        Уверен что у тебя все получится - и с правами, и с машиной.
        Ты многое делаешь, очень много трудишься, и действительно это заслужила!'
      />
    </CustomPage>
  )
}
