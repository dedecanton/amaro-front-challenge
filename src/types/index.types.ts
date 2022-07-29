export type CartItem = {
  image: string;
  name: string;
  id: string;
  price: number;
  quanity: number;
  size: string;
  totalPrice: number;
};

export type CartStore = {
  cartListItem: CartItem[];
  totalAmount: number;
};
