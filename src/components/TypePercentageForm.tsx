import { tipOptions } from "../data";

const TypePercentageForm = ({
  setTip,
  tip,
}: {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <div className="space-y-3">
        <h3 className="font-bold text-2xl">Propinas:</h3>
        <form>
          {tipOptions.map((tipOption, index) => (
            <div key={index} className="flex gap-2">
              <label htmlFor={tipOption.id}>{tipOption.label}</label>
              <input
                type="radio"
                id={tipOption.id}
                name="tip"
                onChange={e => setTip(+e.target.value)}
                value={tipOption.value}
                checked={tipOption.value === tip}
              />
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default TypePercentageForm;
