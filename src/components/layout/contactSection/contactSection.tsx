import styles from './contactSection.module.sass'
import ContactCard from '../../common/contactCard/ContactCard'
import SectionLine from '../../common/sectionLine/sectionLine'

export default function ContactSection() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.name}>
                    <SectionLine lineLength='18%'>
                        <h2 className={styles.title}>контакты</h2>
                    </SectionLine>
                </div>
                <div className={styles.container}>
                    <div className={styles.text}>
                        Меня интересуют возможности фриланса. Однако, если у вас есть другой запрос или вопрос, не стесняйтесь обращаться ко мне.
                    </div>
                    <div className={styles.container__cards}>
                        <div className={styles.card_1}>
                            <ContactCard
                                title='Email'
                                description='j3HqH@example.com'
                                link='mailto:j3HqH@example.com'
                            />
                        </div>
                        <div className={styles.card_2}>
                            <ContactCard
                                title='Telegram'
                                description='@Nick'
                                link='https://t.me/Nick'
                            />
                        </div>
                        <div className={styles.card_3}>
                            <ContactCard
                                title='GitHub'
                                description='@Nick'
                                link='https://github.com/Nick'
                            />
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}