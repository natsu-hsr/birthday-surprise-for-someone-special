import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.title}>
        <FavoriteBorderIcon />
        Сюрприз на день рождения
      </div>
      <div className={styles.user}>
        Для Эвы
      </div>
    </header>
  )
}
