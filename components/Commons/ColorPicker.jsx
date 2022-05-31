import { useState, useEffect } from "react";
import styled from "styled-components";
import { getRgbaColor } from "../../utils/helpers";

const Picker = styled.input`
  margin-top: 4px;
  margin-left: 8px;
`;

export default function ColorPicker({
  getSelectedColor,
  isRandom,
  colorQuerySelected,
  isShareLink,
}) {
  const [randomColor, setRandomColor] = useState({});
  const [colorSelected, setColorSelected] = useState(null);

  useEffect(() => {
    if (colorQuerySelected && isShareLink) {
      setColorSelected(colorQuerySelected);
    } else {
      generateRamdonColors();
    }
  }, [isRandom]);

  useEffect(() => {
    getSelectedColor(colorSelected);
  }, [colorSelected]);

  const getValues = (color) => {
    const hex = color;
    const rgb = getRgbaColor(hex);
    setColorSelected({ hex, rgb });
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
