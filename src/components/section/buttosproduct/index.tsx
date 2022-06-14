import { useState } from 'react';
import * as C from './styles';

export default () => {

  const [isTop, setIsTop] = useState<boolean>(true);
  const [isPopular, setIsPopular] = useState<boolean>(false);
  const [isMostSold, setIsMostSold] = useState<boolean>(false);

  const handleButtonCategory = (num: number) => {
    if(num === 1){
      setIsTop(!isTop);
      setIsPopular(false);
      setIsMostSold(false);
    } else if(num === 2){
      setIsPopular(!isPopular);
      setIsTop(false);
      setIsMostSold(false);
    } else if(num === 3){
      setIsMostSold(!isMostSold);
      setIsPopular(false);
      setIsTop(false);
    }
  }

  return(
    <C.ButtonsProducts
      isTop={isTop}
      isPopular={isPopular}
      isMostSold={isMostSold}
    >
      <h1>Nossos produtos</h1>
      <button onClick={() => handleButtonCategory(1)}>Top</button>
      <button onClick={() => handleButtonCategory(2)}>Popular</button>
      <button onClick={() => handleButtonCategory(3)}>Mais vendidos</button>
    </C.ButtonsProducts>
  );
}