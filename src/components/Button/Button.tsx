import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

interface Props {
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  round?: boolean;
}

export const Button = ({
  color = 'tertiary',
  children,
  className,
  onClick,
  type,
  disabled = false,
  round = false,
}: Props) => {
  return (
    <button
      type={type}
      className={cx(styles.root, className, styles[`${color}`], round && styles.round)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
