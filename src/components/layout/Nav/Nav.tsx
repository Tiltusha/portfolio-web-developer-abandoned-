'use client';

import styles from "./Nav.module.sass";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

export default function Nav() {
    const session = useSession();
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
        {session?.data && (
            <Link href="/profile">Profile</Link>
        )}
        {session?.data ? <Link href="/" onClick={(() => signOut({ callbackUrl: '/' }) )}>Sign Out</Link> : <Link href="/login">Sign in</Link>}
    </nav>
    )
}