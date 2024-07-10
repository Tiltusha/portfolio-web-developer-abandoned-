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
            <img className={styles.logo__img} src="/logo1.png" alt="Logo"></img>
        </div>
        <div className={styles.left}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}><Link className={styles.nav__link} href="/">#главная</Link></li>
                <li className={styles.nav__item}><Link className={styles.nav__link} href="/">#портфолио</Link></li>
                <li className={styles.nav__item}><Link className={styles.nav__link} href="/">#обо_мне</Link></li>
                <li className={styles.nav__item}><Link className={styles.nav__link} href="/">#контакты</Link></li>
            </ul>
            {session?.data && (
                <Link href="/profile">Profile</Link>
            )}
            {session?.data ? <Link href="/" onClick={(() => signOut({ callbackUrl: '/' }) )}>Sign Out</Link> : <Link className={styles.nav__link} href="/login">Sign in</Link>}
        </div>
    </nav>
    )
}