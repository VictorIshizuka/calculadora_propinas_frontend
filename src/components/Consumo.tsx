import { IOrderItem } from "../types";
import OrderContent from "./OrderContent";
import OrderTotal from "./OrderTotal";
import TypePercentageForm from "./TypePercentageForm";

const Consumo = ({
  order,
  removeItem,
  tip,
  setTip,
  placeOrder,
}: {
  order: IOrderItem[];
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  placeOrder: () => void;
  removeItem: (id: number) => void;
}) => {
  return (
    <div className="px-5">
      <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        <h2 className="font-black text-4xl">Consumo</h2>
        {!order.length ? (
          <p className="text-center">Lista de consumos está vazia!</p>
        ) : (
          <>
            <OrderContent order={order} removeItem={removeItem} />
            <TypePercentageForm setTip={setTip} tip={tip} />
            <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
          </>
        )}
      </div>
    </div>
  );
};

export default Consumo;
