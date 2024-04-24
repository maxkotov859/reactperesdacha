import Main4 from "../main4/Main4"
import styles from './main.module.css'

function Main1() {
    let cont = [
        { text: 'Годовое ТО', color: 'darkblue' },
        { text: ' Выравнивание колес', color: 'blue' },
        { text: 'Настройка переключателей', color: 'green' }
    ]
    return (
        <div>
            <div className={styles.container}>
                {cont.map(elem => <Main4
                    key={elem.id} text={elem.text} color={elem.color} />)}
            </div>
        </div>
    )
}

export default Main1