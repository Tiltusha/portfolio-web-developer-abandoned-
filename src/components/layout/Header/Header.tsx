import Nav from '../Nav/Nav'
import styles from './Header.module.sass'
import Link from 'next/link'
import ClassicBtn from '../../common/ClassicBtn/ClassicBtn'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Nav/>
                <div className={styles.container}>
                    <div className={styles.container__main}>
                        <div className={styles.about__text}>
                            <h1 className={styles.about__title}>Никита,  
                                <span className={styles.purple__text}> web designer</span> и <span className={styles.purple__text}>front-end developer</span>
                            </h1>
                            <p className={styles.about__paragraph}>Я создаю адаптивные веб-сайты, где технологии сочетаются с творчеством</p>
                            <ClassicBtn>Написать мне</ClassicBtn>
                        </div>
                        <div className={styles.about__photo}>
                            <img src="/photo.png" alt="avatar" />
                            <div className={styles.about__working}>Currently working on Portfolio</div>
                        </div>
                    </div>
                    <div className={styles.phrase__container}>
                        <img className={styles.cantic__one} src="/cantic.jpg" alt="" />
                        <img className={styles.cantic__two} src="/cantic.jpg" alt="" />
                        <p className={styles.phrase__text}>With great power comes great electricity bill</p>
                        <p className={styles.phrase__author}>-Dr. Who</p> 
                    </div>
                </div>  
            </header>
        </>
    )
}