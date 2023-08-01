import React from 'react';
import { useSelector } from 'react-redux';
import { getSections } from '../../store/section/selectors';
import styles from './SectionList.module.scss';
import { Section } from '../Section/Section';
import cx from 'classnames';

export const SectionList = () => {
  const sections = useSelector(getSections);
  const numberOfSections = sections.length;
  const className =
    numberOfSections === 1 ? null : numberOfSections % 2 === 0 ? styles.even : styles.odd;

  return (
    <div className={cx(styles.root, className)}>
      {sections.map(section => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
};
