import type { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type PageWrapperProps = {
  className?: string;
}

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({children, className}) => {
  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      {children}
    </div>
  )
};
