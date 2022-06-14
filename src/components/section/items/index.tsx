import * as C from './styles';
import { items } from '../../../object/object';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

interface IData {
  name: string;
  image: string;
  price: string;
  category: string;
}

interface IProdutos {
  id: number;
  marca: string;
  emphasis: string;
  data: IData;
  handleSetProduct: (product: string) => void;
}

export default ({ 
  handleSetProduct, 
  id, 
  marca, 
  emphasis, 
  data }: IProdutos) => {

  const [produtos, setProdutos] = useState(items);
  const [selectedProduct, setSelectedProduct] = useState<any>();

  console.log(selectedProduct);

  // const getProduct = (produto: IProdutos) => {
  //   setSelectedProduct(produto)
  // }

  return(
    <C.Container>
      {
        produtos.map((produto, index) => (
          <C.Item key={produto.marca}>
            <img src={produto.data.image} />
            <C.InfoProduct>
              <h1>{produto.data.name}</h1>
              <h2>{produto.data.category}</h2>
              <h3>{produto.data.price}</h3>
            </C.InfoProduct>
            <button onClick={() => setSelectedProduct(produto)}>
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