import { useState, useEffect } from "react";

interface ColorType {
  name: string;
  value: number;
}

const ColorSelector = ({ setColor }: any) => {
  const [colors, setColors] = useState<ColorType[]>([
    { name: "Black", value: 1 },
    { name: "White", value: 2 },
    { name: "Orange", value: 3 },
    { name: "Sky Blue", value: 4 },
    { name: "Natural", value: 5 },
  ]);
  const [selected, setSelected] = useState<string>(colors[0].name);

  useEffect(() => {
    setColor(colors[0].name);
  }, []);
  return (
    <div className="my-6">
      <div className="text-sm my-2">
        Color: <span className="font-semibold">{selected}</span>
      </div>
      <div className="flex my-3 item-center space-x-1">
        {colors.map((item) => (
          <div
            key={item.name}
            style={{ boxSizing: "border-box" }}
            className={`cursor-pointer w-[18.5%] p-[2px] rounded-3xl border border-2 ${
              selected === item.name ? " border-[#007acc]" : "border-white"
            } `}
            onClick={() => {
              setSelected(item.name);
              setColor(item.name);
            }}
          >
            <img
              className={`w-full rounded-3xl h-[33px]`}
              src={`./products/colors/${item.value}.png`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
