import { Button } from '../Button/Button';
import styles from './DeleteCard.module.scss';

interface Props {
  Delete: (value: boolean) => void;
}

export const DeleteCard = ({ Delete }: Props) => {
  // const Delete = (value: boolean) => {
  //   return value;
  // };

  return (
    <div className={styles.root}>
      <div className={styles.title}>Delete Card?</div>
      <div className={styles.buttons}>
        <Button onClick={() => Delete(true)}>Yes</Button>
        <Button onClick={() => Delete(false)}>No</Button>
      </div>
    </div>
  );
};
