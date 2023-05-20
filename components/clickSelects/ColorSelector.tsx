import { useState } from "react";

const ColorSelector = () => {
  const [selected, setSelected] = useState<string>("");
  return (
    <div>
      <div>
        Color: <span className="font-semibold">{selected}</span>
      </div>
    </div>
  );
};

export default ColorSelector;
