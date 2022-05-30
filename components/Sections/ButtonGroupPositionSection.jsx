import styled from "styled-components";
import ButtonImg from "../Commons/ButtonImg";

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direciont: row;
  display: flex;
  flex-wrap: wrap;
`;

export default function ButtonGroupPositionSection({
  options,
  onClickButton,
  valueSelected,
}) {
  return (
    <ButtonGroupContainer>
      <OptionsContainer>
        {options.map((buttonOption, index) => {
          return (
            <ButtonImg
              isSelected={valueSelected === buttonOption.value}
              onClickButton={() => {
                onClickButton(buttonOption.value);
              }}
              key={index}
              buttonText={buttonOption.value}
              svg={buttonOption.svg}
            />
          );
        })}
      </OptionsContainer>
    </ButtonGroupContainer>
  );
}
