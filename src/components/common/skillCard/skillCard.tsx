import styles from './skillCard.module.sass';

interface SkillCardProps {
    title: string;
    description: string;
}

export default function SkillCard({ title, description }: SkillCardProps) {
    return (
        <div className={styles.card__container}>
            <h3 className={styles.card__title}>{title}</h3>
            <hr className={styles.card__divider} /> 
            <p className={styles.card__description}>{description}</p>
        </div>
    )
}
