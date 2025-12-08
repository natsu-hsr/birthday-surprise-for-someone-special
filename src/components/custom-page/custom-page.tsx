import {type FC, type PropsWithChildren, type ReactNode} from 'react';

import styles from './styles.module.scss';


type CustomPageProps = {
  title: string | ReactNode;
}

export const CustomPage: FC<PropsWithChildren<CustomPageProps>> = ({title, children}) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.body}>
      {children}
    </div>
  </div>
)