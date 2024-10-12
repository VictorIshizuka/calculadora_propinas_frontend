import { useMemo } from "react";

import { IOrderItem } from "../types";

import { formatCurrency } from "../helpers/numberFormat";

const OrderTotal = ({
  order,
  tip,
  placeOrder,
}: {
  order: IOrderItem[];
  placeOrder: () => void;
  tip: number;
}): JSX.Element => {
  const initialValue = 0;
  const subTotalAmount = useMemo(
    () =>
      order.reduce(
        (total, item) => total + item.price * item.quantity,
        initialValue
      ),
    [order]
  );

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total e Propina:</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        // disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Salvar pedido
      </button>
    </>
  );
};

export default OrderTotal;
