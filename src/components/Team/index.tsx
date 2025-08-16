import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import SectionTitle from '../inputcomp/SectionTitle';
import TeamCard from '../inputcomp/Teamcard';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team5.jpg';
import team3 from '../../assets/team_3.jpg';

const cx = classNames.bind(styles);

const teams = [
  {
    name: 'Abcd',
    position: 'SERVER ENGINEER',
    img: team1,
    facebookLink: 'https://facebook.com/',
    googleLink: 'https://google.com/',
    twitterLink: 'https://twitter.com/',
  },
  {
    name: 'Eferaj',
    position: 'TEAM LEAD',
    img: team2,
    facebookLink: 'https://facebook.com/',
    googleLink: 'https://google.com/',
    twitterLink: 'https://twitter.com/',
  },
  {
    name: 'Sophia',
    position: 'WEB DESIGNER',
    img: team3,
    facebookLink: 'https://facebook.com/',
    googleLink: 'https://google.com/',
    twitterLink: 'https://twitter.com/',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team">
      <div className={cx('container')}>
        <SectionTitle>Our Team</SectionTitle>
        <div className={cx('team-cards')}>
          {teams.map((team) => (
            <TeamCard
              name={team.name}
              position={team.position}
              img={team.img}
              facebookLink={team.facebookLink}
              googleLink={team.googleLink}
              twitterLink={team.twitterLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;