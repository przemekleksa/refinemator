import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

interface Props {
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ color = 'tertiary', children, className, onClick }: Props) => {
  return (
    <button className={cx(styles.root, className, styles[`${color}`])} onClick={onClick}>
      {children}
    </button>
  );
};
