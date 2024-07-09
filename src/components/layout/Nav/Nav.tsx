'use client';

import styles from "./Nav.module.sass";
import Link from "next/link";
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"

export default function Nav() {
    const session = useSession();
    return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <img className={styles.logo__img} src="/logo.png" alt="Logo"></img>
        </div>
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
        {session?.data ? <Link href="/" onClick={(() => signOut({ callbackUrl: '/' }) )}>Sign Out</Link> : <Link className={styles.nav__link} href="/login">Sign in</Link>}
    </nav>
    )
}