import { IMenuItem } from "../types";

const MenuItem = ({
  item,
  addItem,
}: {
  item: IMenuItem;
  addItem: (item: IMenuItem) => void;
}) => {
  return (
    <button
      className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;
