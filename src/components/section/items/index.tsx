import * as C from './styles';
import { items } from '../../../object/object';
import { PlusCircle } from 'phosphor-react';
import { useContext, useState } from 'react';
import { IProducts } from '../../../types';
import { CartContext } from '../../../context/ItemsContext';

export default () => {
  const [products, setProducts] = useState(items);
  const { addProductCart } = useContext(CartContext);


  return(
    <C.Container>
      {
        products.map(product => (
          <C.Item key={product.brand}>
            <img src={product.data.image} />
            <C.InfoProduct>
              <h1>{product.data.name}</h1>
              <h2>{product.data.category}</h2>
              <h3>{product.data.price}</h3>
            </C.InfoProduct>
            <button onClick={() => addProductCart(product)}>
              <PlusCircle
                color="var(--purple-primary)"
                className="w-6 h-6 mr-2"
              />
              Add a sacola
            </button>
          </C.Item>
        ))
      }
    </C.Container>
  );
}