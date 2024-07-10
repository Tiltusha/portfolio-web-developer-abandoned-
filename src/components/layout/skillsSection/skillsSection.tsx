import styles from './skillsSection.module.sass';
import SectionLine from '@/components/common/sectionLine/sectionLine';
import SkillCard from '@/components/common/skillCard/skillCard';

export default function SkillsSection() {
    return (
        <div className={styles.section}>
            <div className={styles.name}>
                <SectionLine lineLength='30%'>
                    <h2 className={styles.title}>навыки</h2>
                </SectionLine>
            </div>
            <div className={styles.container}>
                <img className={styles.img} src="/abstractions.png" alt="" />
                <div className={styles.cards}>
                    <div className={styles.cards_1}>
                        <SkillCard title='Языки' description='TypeScript JavaScript Python' />
                    </div>
                    <div className={styles.cards_2}>
                        <SkillCard title='Базы данных' description='PostgreSQL SQLite MongoDB' />
                    </div>
                    <div className={styles.cards_3}>
                        <SkillCard title='Утилиты' description='VSCode Neovim Linux macOS Figma Git Font Docker' />
                    </div>
                    <div className={styles.cards_4}>
                        <SkillCard title='Прочее' description='HTML CSS EJS SASS Rest API' />
                    </div>
                    <div className={styles.cards_5}>
                        <SkillCard title='Фреймворки' description='React React-Native Express.js Next.js Nest Flask FastAPi' />
                    </div>
                </div>
            </div>
        </div>
    );
}