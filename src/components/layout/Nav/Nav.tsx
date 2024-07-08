import styles from "./Nav.module.sass";
import Link from "next/link";

export default function Nav() {
    return (
    <nav className={styles.nav}>
        <div className={styles.logo}>лого</div>
        <ul className={styles.nav__list}>
            <li className={styles.nav__item}><Link className={styles.nav__link} href="/">Главная</Link></li>
            <li className={styles.nav__item}><Link className={styles.nav__link} href="/">Посты</Link></li>
            <li className={styles.nav__item}><Link className={styles.nav__link} href="/">Авторы</Link></li>
            <li className={styles.nav__item}><Link className={styles.nav__link} href="/">Поиск</Link></li>
            <li className={styles.nav__item}><Link className={styles.nav__link} href="/">О нас</Link></li>
        </ul>
    </nav>
    )
}