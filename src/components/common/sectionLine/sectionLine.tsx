import styles from './sectionLine.module.sass';

type SectionLineProps = {
    children: React.ReactNode;
    lineLength?: string;
    link?: string;
};

export default function SectionLine({ children, lineLength = '25%', link }: SectionLineProps) {
    return (
        <div className={styles.section__line}>
            <span className={styles.text}><span className={styles.purple}>#</span>{children}</span>
            <span className={styles.line} style={{ width: lineLength }}></span>
            {link && (
                <a href={link} className={styles.link}>
                    Посмотреть
                </a>
            )}
        </div>
    );
}



