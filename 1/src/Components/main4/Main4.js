import styles from './main4.module.css'
function Main4(props) {
  const { text, color } = props
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <h3 className={styles.text}>
        {text}
      </h3>
    </div>

  )
}

export default Main4