import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getAllItems as getProducts, getItemByCategory} from '../data/dbase'


function ItemListContainer() {
  const [products, setProducts] = useState();
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid === undefined) {
    getProducts().then((resPromise) => {
      setProducts(resPromise);
    });
  } else {
    getItemByCategory(categoryid).then((resPromise) => {
      setProducts(resPromise);
    });
  }
  }, [categoryid]);

  return (
    <div 
    id="itemListContainer"
    className="static flex items-center m-auto p-4 hero bg-fixed bg-center bg-cover min-h-screen "
    >
      <ItemList products={products} productsId={categoryid} />
    </div>
  );
}

export default ItemListContainer;
