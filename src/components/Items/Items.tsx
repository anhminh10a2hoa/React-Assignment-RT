import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {getAllProductsByCategory} from '../../api/api'
import Item from './Item/Item';
import './Items.css';

type ItemsProps = {
  search?: any;
  listOfProductsAndManufacturer: any;
}
let listOfProducts: any = [];
const Items: React.FC<ItemsProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const category: any = useParams();

  useEffect(() => {
    setLoading(true);
    getAllProductsByCategory(category.category)
      .then((res) => {listOfProducts = res})
      .then(() => {setLoading(false)})
    }, [category]
  );

  return (
    <React.Fragment>
      {(category.category == "jackets" || 
      category.category == "shirts" || 
      category.category == "accessories") ? loading ? (<p>It's loading...</p>) : (
        <div className="Items">
          {listOfProducts.map((p: any) => (
            <Item key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <p>Does not exist this category</p>
      )}
    </React.Fragment>
  );
}

export default Items;
