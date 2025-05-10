import { Price } from "./price.type";

export interface CartItem {
  name: string;
  price: Price;
  quantity: number;
  _idMenuItem: string;
  images: string[];
  options?: string;
  description?: string;
  modifiers: CartItemModifier[];
}

export interface CartItemModifier {
  _idModifiers: string;
  price: Price;
}
