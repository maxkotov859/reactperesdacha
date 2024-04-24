import { ReactComponent as Logo } from './logo.svg'
import priceJpg from './dinos.png'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.main}>
            <ul className={styles.list}>
                <li className={styles.list_li}>О нас</li>
                <li className={styles.list_li}>Услуги</li>
                <li className={styles.list_li}>Аренда</li>
            </ul>
            <button className={styles.button}>Связаться</button>
            <Logo className={styles.logo} />
            <h1 className={styles.title}>Веломастерская “Велозар”</h1>
            <p className={styles.text}>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            <img className={styles.image} src={priceJpg} alt='picture' />
        </div>
    )
}

export default Header