import React, { useState } from "react";
import { setLampToColor, turnOffLamp } from "../helpers/hueHelper";

export type LampProps = {
  id: number;
};

enum lampColour {
  black,
  green,
  red,
}

const Lamp: React.FC<any> = (props: LampProps) => {
  const [colour, setColour] = useState<lampColour>(lampColour.black);

  const handleLampClick = (col: lampColour) => {
    setColour(col);
    if (col == lampColour.black) {
      turnOffLamp(props.id);
    } else {
      setLampToColor(props.id, col == lampColour.green ? 25500 : 65530);
    }
  };

  return (
    <>
      <div className="lampItem">
        <div className="lampHeader">
          <span
            className={`lampIcon ${
              colour == lampColour.black
                ? "black"
                : colour == lampColour.green
                ? "green"
                : "red"
            }`}
          ></span>
        </div>
        <div className="lampGroup">
          <button onClick={() => handleLampClick(lampColour.green)}>
            Grön
          </button>
          <button onClick={() => handleLampClick(lampColour.red)}>Grön</button>
          <button onClick={() => handleLampClick(lampColour.black)}>
            Stäng av
          </button>
        </div>
      </div>
    </>
  );
};

export default Lamp;
