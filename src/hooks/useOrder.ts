import { useState } from "react";
import { IMenuItem, IOrderItem } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<IOrderItem[]>([]);
  const [tip, setTip] = useState(0);

  function addItem(item: IMenuItem) {
    const foundItem = order.findIndex(orderItem => orderItem.id === item.id);
    if (foundItem === -1) {
      const newItem: IOrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      setOrder(oldData =>
        oldData.map(orderItem => ({
          ...orderItem,
          quantity: orderItem.quantity++,
        }))
      );
    }
  }

  function removeItem(id: number) {
    const removeItem = order.filter(item => item.id !== id);
    setOrder(removeItem);
  }

  function placeOrder() {
    setOrder([]);
    setTip(0);
  }

  return { addItem, removeItem, placeOrder, order, tip, setTip };
};
export default useOrder;
