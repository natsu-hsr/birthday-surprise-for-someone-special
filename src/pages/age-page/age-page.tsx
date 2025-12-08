import type { FC } from "react";
import {CustomPage} from "../../components/custom-page"
import {CountUpText} from "./countup-text/countup-text";
import type {PageFinishProps} from "../../types";
import {ListMessages} from "./list-messages";

import styles from './styles.module.scss';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const AgePage: FC<PageFinishProps> = ({nextRoute}) => {
  const navigate = useNavigate();

  return (
    <CustomPage title="Но прежде чем начнем...">
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Тебе всего лишь&nbsp;
          <CountUpText
            from={0}
            to={23}
            separator=","
            direction="up"
            duration={1}
            className={styles.countup}
          />
        </div>
        <div className={styles.description}>
          Это совсем немного, но посмотри сколько всего ты уже достигла:
        </div>

        <ListMessages />

        {/* <div> */}
          <Button
            className={styles.button}
            variant="contained"
            onClick={() => navigate(nextRoute)}
          >
            К первому заданию
          </Button>
        {/* </div> */}
        
      </div>
    </CustomPage>
  )
}