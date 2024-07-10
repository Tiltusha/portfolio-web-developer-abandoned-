import styles from './projectSection.module.sass';
import SectionLine from '@/components/common/sectionLine/sectionLine';
import ProjectCard from '../../common/projectCard/projectCard';
import ClassicBtn from '@/components/common/ClassicBtn/ClassicBtn';

export default function ProjectsSection() {
    return (
            <div className={styles.section}>
                <div className={styles.name}>
                    <SectionLine lineLength='50%'>
                        <h2 className={styles.title}>проекты</h2>
                    </SectionLine>
                </div>
                <div className={styles.project__cards}>
                    <ProjectCard imgSrc='project1.jpg' technologies='HTML, CSS, JS' title='Проект 1' description='Описание проекта' btnText='Подробнее' />
                    <ProjectCard imgSrc='project1.jpg' technologies='HTML, CSS, JS' title='Проект 1' description='Описание проекта' btnText='Подробнее' />
                    <ProjectCard imgSrc='project1.jpg' technologies='HTML, CSS, JS' title='Проект 1' description='Описание проекта' btnText='Подробнее' />
                </div>
                <div className={styles.section__btn}>
                    <ClassicBtn>Все проекты</ClassicBtn>
                </div>
            </div>
    )
}

