import { useEffect, useState } from "react";
import PItem from "./PItem";

function PList() {

  const [products, setProducts] = useState([])


  function deleteProd(id) {
    let changedProd = products.filter(elem => elem.id !== id)
    setProducts(changedProd)
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <div className="product_list">
      {products.map(elem =>
        <PItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          image={elem.images[0]}
          price={elem.price + '$'}
          rating={Math.round(+elem.rating)}
          deleteProd={deleteProd}
        />)}
    </div>
  );
}

export default PList;