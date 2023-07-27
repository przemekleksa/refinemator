import React from 'react';
import { TopBar } from '../../components/TopBar/TopBar';

import { useSelector } from 'react-redux';
import { getSections } from '../../store/section/selectors';
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
