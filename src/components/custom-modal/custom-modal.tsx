import type {FC, ReactNode} from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import {CustomButton} from "../custom-button";

import styles from './styles.module.scss';

import gif1 from "/src/assets/cat-driving.gif";
import gif2 from "/src/assets/cat-wow.gif";
import gif3 from "/src/assets/happy-cat.gif";

const gifs: Record<string, string> = {
  "cat-driving.gif": gif1,
  "cat-wow.gif": gif2,
  "happy-cat.gif": gif3,
};

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  svgName: string;
  title?: string;
  message: string | ReactNode;
  buttonTitle?: string;
}

export const CustomModal: FC<CustomModalProps> = ({
  open,
  onClose,
  svgName,
  title,
  message,
  buttonTitle,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent className={styles.content}>
        <img
          className={styles.gif}
          src={gifs[svgName]}
          alt="celebration"
        />

        <DialogTitle className={styles.title}>
          {title ?? 'Отличная работа!'}
        </DialogTitle>

        <Typography className={styles.message}>
          {message}
        </Typography>

        <CustomButton title={buttonTitle ?? 'Продолжить'} onClick={onClose} />
      </DialogContent>
    </Dialog>
  );
}