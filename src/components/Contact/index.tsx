import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import SectionTitle from '../inputcomp/SectionTitle';
import ContactCard  from '../inputcomp/ContactCard';

type ContactCardType = 'phone' | 'email' | 'address';

interface Props {
  className?: string;
}

const contactList: { type: ContactCardType; value: string }[] = [
  {
    type: 'phone',
    value: '+81-00-0000-0000',
  },
  {
    type: 'email',
    value: 'email@addres.com',
  },
  {
    type: 'address',
    value: 'City',
  },
];

const cx = classNames.bind(styles);

const Contact: React.FC<Props> = ({ className }) => {
  return (
    <section id="contact" >
      <div className={cx('container', className)}>
        <SectionTitle>Contact Us</SectionTitle>
        <div className={cx('contact-cards')}>
          {contactList.map((contact, index) => (
            <ContactCard key={index} type={contact.type} value={contact.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;