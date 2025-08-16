import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdjust,
  faBahai,
  faBold,
  faCog,
  faCrow,
  faGlassMartini,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import Card from '../inputcomp/Card';
import SectionTitle from '../inputcomp/SectionTitle';
import ImageSlide from '../inputcomp/ImageSlide';

// Resources
// import {SlideImg1, SlideImg2, SlideImg3} from '../../assets/react.svg';
import Slide1 from '../../assets/slide2.jpg';
import Slide2 from '../../assets/slide3.jpg';
// import Slide3 from '../../assets/slide3.jpg';
const cx = classNames.bind(styles);

const slideImgs: string[] = [Slide1, Slide2];

const cards = [
  {
    title: 'Creative',
    description:
      'A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.',
    icon: faAdjust,
    href: '#',
  },
  {
    title: 'Unique',
    description:
      'A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.',
    icon: faBahai,
    href: '#',
  },
  {
    title: 'Design',
    description:
      'A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.',
    icon: faBold,
    href: '#',
  },
  {
    title: 'Support',
    description:
      'A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.',
    icon: faCog,
    href: '#',
  },
  {
    title: 'Modern',
    description:
      'A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.',
    icon: faCrow,
    href: '#',
  },
  {
    title: 'Needs',
    description:
      'A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.',
    icon: faGlassMartini,
    href: '#',
  },
];

const CheckLabel = ({ children = '' }) => {
  return (
    <div className={cx('check-label')}>
      <FontAwesomeIcon
        className={cx('check-ico')}
        icon={faCheckCircle}
        color="#6195ff"
      />
      {children}
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className={cx('services')}>
        <div className={cx('what-we-offer')}>
          <SectionTitle>What We Offer</SectionTitle>
          <div className={cx('cards')}>
            {cards.map(({ title, description, icon, href }, cardIdx) => (
              <Card
                key={cardIdx}
                title={title}
                description={description}
                icon={icon}
                href={href}
              />
            ))}
          </div>
        </div>
        <div className={cx('why-choose-us')}>
          <div className={cx('content')}>
            <div className={cx('text')}>
              <SectionTitle className={cx('title')}>Why Choose Us</SectionTitle>
              <p>
                A company can be created as a legal person so that the company
                itself has limited liability as members perform or fail to
                discharge their duty according to the publicly declared
                incorporation, or published policy. When a company closes, it may
                need to be liquidated to avoid further legal obligations.
              </p>
              <CheckLabel>Have a Quality Product</CheckLabel>
              <CheckLabel>Know Your Industry and Competitors</CheckLabel>
              <CheckLabel>Promote Your Products and Services</CheckLabel>
              <CheckLabel>Build a Great Staff</CheckLabel>
            </div>
            <div className={cx('slide-imgs')}>
              <ImageSlide imgs={slideImgs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;