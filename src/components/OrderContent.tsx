import { formatCurrency } from "../helpers/numberFormat";
import { IOrderItem } from "../types";

const OrderContent = ({
  order,
  removeItem,
}: {
  order: IOrderItem[];
  removeItem: (id: number) => void;
}) => {
  return (
    <div className="space-3 mt-10">
      {order.map((order, index) => (
        <div
          key={index}
          className="flex justify-between  border-t border-gray-200 py-5 last-of-type:border-b"
        >
          <div>
            <p className="text-lg">
              {order.name}-{formatCurrency(order.price)}
            </p>
            <p className="font-black  ">
              Qtd: {order.quantity} -{" "}
              {formatCurrency(order.quantity * order.price)}
            </p>
          </div>
          <button
            className="bg-red-600 rounded-full h-8 w-8 text-white font-black"
            onClick={() => removeItem(order.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderContent;
