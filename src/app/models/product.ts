export interface Product {
  $key: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface ProductForm {
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}
