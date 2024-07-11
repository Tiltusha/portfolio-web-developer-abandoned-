import styles from './Footer.module.sass'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.left__content}>
                        <h3 className={styles.name}>Nikita</h3>
                        <p>Москва, Россия</p>
                    </div>
                    <p>
                        Web designer and front-end developer
                    </p>
                </div>
                <div className={styles.right}>
                    Media
                </div>
            </div>
            <p className={styles.copyright}>© 2022. Все права защищены.</p>
        </div>
    )
}