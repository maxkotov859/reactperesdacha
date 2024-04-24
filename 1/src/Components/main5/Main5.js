import styles from './main5.module.css'
import priceJpg from './bike.jpg'

function Main5() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={priceJpg} alt="bike!" />
      <h3 className={styles.h3}>Прокат велосипедов</h3>
      <p className={styles.text}>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
    </div>
  )
}

export default Main5