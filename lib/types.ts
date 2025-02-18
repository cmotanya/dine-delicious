export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface FormattedMenuItem {
  id: number;
  name: string;
  formattedPrice: string;
}
