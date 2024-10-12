import { IMenuItem } from "../types";
import MenuItem from "./MenuItem";

const Menu = ({
  data,
  addItem,
}: {
  data: IMenuItem[];
  addItem: (item: IMenuItem) => void;
}) => {
  return (
    <div className="p-5">
      <h2 className="text-4xl font-black">Menu</h2>
      <div className="space-y-3 mt-10">
        {data.map((item, index) => (
          <MenuItem key={index} item={item} addItem={addItem} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
