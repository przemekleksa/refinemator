import { TopBar } from '../../components/TopBar/TopBar';
import { SectionList } from '../../components/SectionList/SectionList';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.root}>
      <TopBar />
      <SectionList />
    </div>
  );
};
