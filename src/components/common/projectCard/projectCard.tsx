import styles from './projectCard.module.sass';
import ClassicBtn from '../../common/ClassicBtn/ClassicBtn';

type ProjectCardProps = {
    imgSrc: string;
    title: string;
    description: string;
    technologies: string;
    btnText: string;
};

export default function ProjectCard({ imgSrc, title, description, technologies, btnText }: ProjectCardProps) {
    return (
        <div className={styles.section}>
            <img className={styles.card__img} src={imgSrc} alt="" />
            <div className={styles.card__technologies}>{technologies}</div>
            <hr className={styles.hr} />
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{description}</p>
                <div className={styles.card__btn}>
                    <ClassicBtn>{btnText}</ClassicBtn>
                </div>
            </div>
        </div>
    )
}
