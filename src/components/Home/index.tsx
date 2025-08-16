import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import Button from '../inputcomp/Button';

// Resoucres
import bgImg from '../../assets/bg1.jpg';

const cx = classNames.bind(styles);

const Home: React.FC = () => {
  return (
    <section id="home">
      <div className={cx('home')}>
        <div
          className={cx('bg')}
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className={cx('intro')}>
          <h1>I am nursing student</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className={cx('btns')}>
            <Button className={cx('btn')}>Get Started!</Button>
            <Button className={cx('btn')} type="primary">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;