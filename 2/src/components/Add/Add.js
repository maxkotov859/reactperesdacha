function Add({addNewProd}){

    return(
        <div>
            <button onClick={() => addNewProd()}>Добавить новый товар</button>
        </div>
    )
}

export default Add