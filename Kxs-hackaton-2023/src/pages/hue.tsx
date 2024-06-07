import React from "react";
import { setLampToColor } from "../helpers/hueHelper";
import lampa from "../assets/lampa.svg";
import Lamp from "../components/lamp";

//Skapa ett konto på https://developers.meethue.com/ för att kolla in api referenser

const Hue: React.FC<any> = () => {
  return (
    <>
      <h1>Hue exempel</h1>
      <div className="hueGroup">
        <Lamp id={1} />
        <Lamp id={2} />
        <Lamp id={3} />
      </div>
    </>
  );
};

export default Hue;
