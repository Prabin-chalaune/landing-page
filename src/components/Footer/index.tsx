import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Footer: React.FC = () => {
  return (
    <footer className={cx("footer")}>
      <p className={cx("footer__text")}>
        &copy; {new Date().getFullYear()} Khima. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
