import styles from './ContactCard.module.sass';

interface ContactCardProps {
    title: string;
    description: string;
    link: string;
}

export default function ContactCard({ title, description, link }: ContactCardProps) {
    return (
        <div className={styles.card__container}>
            <h3 className={styles.card__title}>{title}</h3>
            <hr className={styles.card__divider} />
            <p className={styles.card__description}>{description}</p>
            <a href={link} className={styles.card__link}>
                {link}
            </a>
        </div>
    )
}