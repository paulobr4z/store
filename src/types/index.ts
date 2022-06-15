export interface IData {
  name: string;
  image: string;
  price: string;
  category: string;
}

export interface IProducts {
  id: number;
  brand: string;
  emphasis: string;
  data: IData;
}