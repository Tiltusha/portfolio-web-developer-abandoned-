import SectionLine from '@/components/common/sectionLine/sectionLine';
import styles from './aboutSection.module.sass';
import ClassicBtn from '@/components/common/ClassicBtn/ClassicBtn';

export default function AboutSection() {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <SectionLine lineLength='40%'><h2 className={styles.title}>обо мне</h2></SectionLine>
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <p className={styles.text}>
                    Привет, я Никита!
                    <br />
                    <br />
                    Я фронтенд-разработчик-самоучка из Москвы, Россия. Я могу разрабатывать адаптивные веб-сайты с нуля и превращать их в современные, удобные для пользователя веб-интерфейсы. 
                    <br />
                    <br />
                    Преобразование моего творчества и знаний в веб-сайты было моей страстью уже больше года. Я помогаю различным клиентам установить свое присутствие в Интернете. Я всегда стремлюсь узнавать о новейших технологиях и фреймворках.
                    </p>
                    <ClassicBtn>Подробнее</ClassicBtn>
                </div>
                <div className={styles.right}>
                    <img className={styles.img} src="/photoabout.png" alt="avatar" />
                </div>
            </div>
        </div>
    )
}