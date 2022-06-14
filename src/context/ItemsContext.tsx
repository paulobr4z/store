import { createContext, ReactNode, useState } from "react";
import { items } from '../object/object';

console.log(items);

interface Props {
  children: ReactNode;
}

interface Item {
  name: string;
  image: string;
  price: string;
  category: string;
}

interface Items {
  id: number;
  emphasis: string;
  data: Item;
}

interface ItemsCart {
  cart: Items;
  setCart: () => void;
}

export const ItemsContext = createContext<Items | null>(null);

export const ItemsContextProvider = ({ children }: Props) => {

  const [cart, setCart] = useState<ItemsCart>();

  return(
    <ItemsContext.Provider value={{ cart, setCart }}>
      {children}
    </ItemsContext.Provider>
  );
}