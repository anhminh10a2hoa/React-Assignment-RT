import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Item from './Item/Item';
import './Items.css';

type ItemsProps = {
  location?: any;
}

const Items: React.FC<ItemsProps> = (props) => {
  const [items, setItems] = useState({} as any);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(props.location.search.replace('?category=', ''));

  useEffect(() => {
    setSearchValue(props.location.search.replace('?category=', ''));
    setLoading(true);
    axios
      .get(`https://bad-api-assignment.reaktor.com/products/${searchValue}`)
      .then((response) => setItems(response.data))
      .then(() => setLoading(false))
    }, [searchValue]
  );

  return (
    <React.Fragment>
      {loading ? (<p>It's loading...</p>) : (
        <div className="Items">
          {items.map((item: any) => (<Item key={item.id} {...item}  />))}
        </div>
      )}
    </React.Fragment>
  );
}

export default Items;
