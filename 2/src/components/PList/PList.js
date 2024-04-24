import PItem from "../PItem/PItem"
import styles from './PList.module.css'

function PList(props) {
    const { product, handleIncrement, handleDecrement, deleteProd } = props
    return (
        <div className={styles.container}>
            {product.map(elem => <PItem
                key={elem.id}
                id={elem.id}
                name={elem.name}
                price={elem.price}
                count={elem.count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                deleteProd={deleteProd}
            />)}
        </div>
    )
}

export default PList
