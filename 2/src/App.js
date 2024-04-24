import { useState } from 'react';
import './App.css';
import AddProduct from './components/Add/Add';
import ProductList from './components/PList/PList';

function App() {

  const data = [
    { id: 1, name: 'Огурец', price: 50, count: 1 },
    { id: 2, name: 'Помидор', price: 70, count: 1 },
    { id: 3, name: 'Салат', price: 130, count: 2 },
    { id: 4, name: 'Лук', price: 20, count: 4 }
  ]

  const [product, setProduct] = useState(data)

  function addNewProd() {
    let [name, price] = prompt().split(' ')
    if (name && !isNaN(price)) {
      let newProd = {
        id: Date.now(),
        name,
        price: +price,
        count: 1
      }
      setProduct([...product, newProd])
    } else {
      alert('Введите корректные данные');
    }
  };

  function handleIncrement(id) {
    let changedProd = product.map(elem => {
      if (elem.id === id && elem.count < 25) {
        return {
          ...elem,
          count: elem.count + 1
        }
      }
      return elem
    })
    setProduct(changedProd)
  }

  function handleDecrement(id) {
    let changedProd = product.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          count: Math.max(1, elem.count - 1)
        }
      }
      return elem
    })
    setProduct(changedProd)

    if (product.find(el => el.id === id).count === 1) {
      deleteProd(id)
    }
  }

  function deleteProd(id) {
    let changedProd = product.filter(elem => elem.id !== id)
    setProduct(changedProd)
  }


  return (
    <div className="app">
      <AddProduct
        addNewProd={addNewProd} />
      <ProductList
        product={product}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        deleteProd={deleteProd}
      />
    </div>
  );
}

export default App;
