import type {FC} from 'react';
import {Button} from '@mui/material';

import styles from './styles.module.scss';

type CustomButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const CustomButton: FC<CustomButtonProps> = ({title, onClick, disabled, className}) => (
  <Button
    // className={styles.button}
    className={`${styles.button} ${className ? className : ""}`}
    variant="contained"
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </Button>
)