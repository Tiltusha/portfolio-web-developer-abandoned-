import styles from './ClassicBtn.module.sass'

interface ButtonProps {
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className={styles.btn}>{children}</button>
}

export default Button

