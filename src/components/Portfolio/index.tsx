import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import SectionTitle from '../inputcomp/SectionTitle';
import PortfolioCard from '../inputcomp/Portfoliocard';
import Card1 from '../../assets/card1.jpg';
import Card2 from '../../assets/card2.jpg';
import Card3 from '../../assets/cardthree.jpg';
import Card4 from '../../assets/cardfour.jpg';
import Card5 from '../../assets/cardfive.jpg';
import Card6 from '../../assets/cardsix.jpg';


const cx = classNames.bind(styles);
const cardImgs = [Card1, Card2, Card3, Card4, Card6, Card5];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <div className={cx('container')}>
        <SectionTitle>Featured Works</SectionTitle>
        <div className={cx('portfolio-cards')}>
          {
            cardImgs.map((cardImg, cardImgIdx) => (
              <PortfolioCard key={cardImgIdx} img={cardImg} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;