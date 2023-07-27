import React from 'react';
import { useSelector } from 'react-redux';
import { getSections } from '../../store/section/selectors';
import styles from './SectionList.module.scss';
import cx from 'classnames';

export const SectionList = () => {
  const sections = useSelector(getSections);

  return (
    <div className={styles.root}>
      {sections.map(section => (
        <div className={cx(styles.section, styles[`${section.color}`])} key={section.id}>
          <div className={styles.sectionName}>{section.name}</div>
        </div>
      ))}
    </div>
  );
};
