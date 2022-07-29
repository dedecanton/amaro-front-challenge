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

export type Product = {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: Size[]
};

export type Size = {
  available:boolean;
  size: string;
  sku: string
}

