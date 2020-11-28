import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
    axios.get(`https://bad-api-assignment.reaktor.com/products/${category.category}`)
      .then((response) => {
        response.data.map((p: any, i:number) => {
          let itemManufacturer = props.listOfProductsAndManufacturer[p.manufacturer];
          let datapayload = "";
          let status = [];
          datapayload = itemManufacturer.find(
            (val: any) => val.id === p.id.toUpperCase()
          )["DATAPAYLOAD"];
          status = datapayload.split('INSTOCKVALUE>');
          listOfProducts.push(<Item key={p.id} {...p} status={status[1].replace("</", "")} />)
        })
      })
      .then(() => setLoading(false))
    }, [category]
  );

  return (
    <React.Fragment>
      {loading ? (<p>It's loading...</p>) : (
        <div className="Items">
          {listOfProducts}
        </div>
      )}
    </React.Fragment>
  );
}

export default Items;
