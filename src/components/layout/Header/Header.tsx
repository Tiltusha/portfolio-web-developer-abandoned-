import Nav from '../Nav/Nav'
import styles from './Header.module.sass'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Nav/>
                <div className={styles.container}>
                    
                </div>
            </header>
        </>
    )
}