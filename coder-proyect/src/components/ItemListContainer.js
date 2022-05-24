import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getAllItems as getProducts, getItemByCategory, dataToFirebase} from '../data/dbase'


function ItemListContainer() {
  const [cars, setCars] = useState();
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid === undefined) {
    getProducts().then((resPromise) => {
      setCars(resPromise);
    });
  } else {
    getItemByCategory(categoryid).then((resPromise) => {
      setCars(resPromise);
    });
  }
  }, [categoryid]);

  return (
    <div className="flex place-content-center p-4">
      <ItemList cars={cars} />
    </div>
  );
}

export default ItemListContainer;
