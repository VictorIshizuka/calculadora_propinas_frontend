export type IMenuItem = {
  id: number;
  name: string;
  price: number;
};

export type IOrderItem = IMenuItem & {
  quantity: number;
};

export type ItipOptions = {
  id: string;
  value: number;
  label: string;
};
