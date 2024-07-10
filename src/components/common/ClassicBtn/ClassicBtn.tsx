import styles from './ClassicBtn.module.sass'

export default function Button({children}) {
    return (<button className={styles.btn}>{children}</button>)
}
