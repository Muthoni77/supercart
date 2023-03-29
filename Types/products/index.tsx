import { IconType } from "react-icons";

export interface ProductCardType {
  bg: string;
  title: string;
  body: string;
  photo: string;
}

export interface ProductCategoryCardType {
  photo: string;
  products: number;
  manufacturer: string;
  title: string;
  color: string;
}
export interface ProductCardPhotoType {
  title: string;
  productColor: string;
  photo: string;
  price: number;
  rating: number;
  reviews: number;
}
export interface ProductDepartmentType {
  bg: string;
  photo: string;
  title: string;
  categories: number;
}
