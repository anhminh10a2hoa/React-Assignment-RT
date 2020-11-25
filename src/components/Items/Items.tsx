import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Item from './Item/Item';
import './Items.css';

const Items: React.FC = () => {
  let {category}: any = useParams();  
  const [items, setItems] = useState({} as any);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://bad-api-assignment.reaktor.com/products/${category}`)
      .then((response) => setItems(response.data))
      .then(() => setLoading(false))
    }, [setItems]
  );

  return (
    <React.Fragment>
      {loading ? (<p>It's loading...</p>) : (
        <div className="Items">
          {items.map((item: any) => (<Item key={item.id} props={}/>))}
        </div>
      )}
    </React.Fragment>
  );
}

export default Items;
