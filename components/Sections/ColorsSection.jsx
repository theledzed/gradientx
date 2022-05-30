import ColorPicker from "../Commons/ColorPicker";
import styled from "styled-components";
import Button from "../Commons/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  display: block;
  margin-top: 16px;
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1.75rem;
`;

const ColorPickerContainer = styled.div`
  display: flex;
  flex-direciont: row;
`;

export default function ColorsSection({
  titleSection,
  buttonText,
  getColors,
  isRandomCallToAction,
  getStyledQuery,
  getPositionQuery,
}) {
  const [colorSelectedOne, setColorSelectedOne] = useState("");
  const [colorSelectedTwo, setColorSelectedTwo] = useState("");
  const [queryColorOne, setQueryColorOne] = useState(null);
  const [queryColorTwo, setQueryColorTwo] = useState(null);
  const [isShareLink, setIsShareLink] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getColors(colorSelectedOne, colorSelectedTwo);
  }, [colorSelectedOne, colorSelectedTwo]);

  useEffect(() => {
    setIsRandom(!isRandom);
    setIsShareLink(false);
  }, [isRandomCallToAction]);

  useEffect(() => {
    if (router.asPath.includes("?")) {
      const params = router.asPath.split("?=");
      const optionOneHex = params[1];
      const optionTwoHex = params[2];
      const optionOneRgb = getRgbaColor(optionOneHex);
      const optionTwoRgb = getRgbaColor(optionTwoHex);
      setQueryColorOne({ hex: optionOneHex, rgb: optionOneRgb });
      setQueryColorTwo({ hex: optionTwoHex, rgb: optionTwoRgb });
      const styleQuery = params[3];
      const positionQuery =
        styleQuery === "Radial" ? params[4].replaceAll("%20", " ") : "";
      getPositionQuery(positionQuery);
      getStyledQuery(styleQuery);
      setIsShareLink(true);
    }
  }, []);

  const getRgbaColor = (color) => {
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <ColorsContainer>
      <Label>{titleSection}</Label>
      <ColorPickerContainer>
        <ColorPicker
          getSelectedColor={(color) => {
            setColorSelectedOne(color);
          }}
          colorQuerySelected={queryColorOne}
          isRandom={isRandom}
          isShareLink={isShareLink}
        />
        <ColorPicker
          getSelectedColor={(color) => {
            setColorSelectedTwo(color);
          }}
          colorQuerySelected={queryColorTwo}
          isRandom={isRandom}
          isShareLink={isShareLink}
        />
        <Button
          buttonText={buttonText}
          onClickButton={() => {
            setIsRandom(!isRandom);
            setIsShareLink(false);
          }}
        />
      </ColorPickerContainer>
    </ColorsContainer>
  );
}
