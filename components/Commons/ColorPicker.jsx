import { useState, useEffect } from "react";
import styled from "styled-components";

const Picker = styled.input`
  margin-top: 4px;
  margin-left: 8px;
`;

export default function ColorPicker({ getSelectedColor, isRandom }) {
  const [randomColor, setRandomColor] = useState({});
  const [colorSelected, setColorSelected] = useState(null);

  useEffect(() => {
    generateRamdonColors();
  }, [isRandom]);

  useEffect(() => {
    getSelectedColor(colorSelected);
  }, [colorSelected]);

  const getValues = (color) => {
    const hex = color;
    const rgb = getRgbaColor(hex);
    setColorSelected({ hex, rgb });
  };

  const getRgbaColor = (color) => {
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    return `rgb(${r},${g},${b})`;
  };
  const generateRamdonColors = () => {
    const hex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const rgb = getRgbaColor(hex);
    setRandomColor({ hex, rgb });
    setColorSelected({ hex, rgb });
    getSelectedColor({ hex, rgb });
  };

  return (
    <Picker
      type="color"
      onChange={(event) => {
        getValues(event.target.value);
      }}
      id="head"
      name="head"
      value={colorSelected?.hex ?? randomColor.hex}
    />
  );
}
