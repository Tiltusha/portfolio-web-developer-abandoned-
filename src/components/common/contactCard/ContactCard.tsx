import React from 'react';

import styles from './ContactCard.module.sass';

interface ContactCardProps {
    title: string;
    description: string;
    link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, description, link }) => {
    return (
        <div className={styles.card__container}>
            <h3 className={styles.card__title}>{title}</h3>
            <hr className={styles.card__divider} />
            <p className={styles.card__description}>{description}</p>
            <a href={link} className={styles.card__link} target="_blank" rel="noopener noreferrer">
                {link}
            </a>
        </div>
    )
}

export default ContactCard;
