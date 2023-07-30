/** @format */

export interface IProduct {
  name: string;
  brand: string;
  color: string;
}
// * extends -> kế thừa Product
export interface IProductNewFeature extends IProduct {
  speed?: string;
}

export interface IProductPrice {
  price: number;
}

// & Intersection types (&) -> gộp 2 hoặc nhiều interface lại với nhau
export type IFinalProduct = IProduct & IProductPrice;

export interface ICard {
  title: string;
  description: string;
  image: string;
  link: string;
}
