import styles from './Modal.module.scss';

interface Props {
  children: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({ children, onClose }: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.root}>
        <button className={styles.close} onClick={onClose}>
          X
        </button>
        <div className={styles.children}>{children}</div>
      </div>
      ;
    </div>
  );
};
