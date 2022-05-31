import styled from "styled-components";
import Button from "../Commons/Button";

const ButtonGroupContainer = styled.div`
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

const OptionsContainer = styled.div`
  display: flex;
  flex-direciont: row;
`;

export default function ButtonGroupSection({
  options,
  titleSection,
  onClickButton,
  valueSelected,
}) {
  return (
    <ButtonGroupContainer>
      <Label>{titleSection}</Label>
      <OptionsContainer>
        {options.map((buttonOption, index) => {
          return (
            <Button
              isSelected={valueSelected === buttonOption.value}
              onClickButton={() => {
                onClickButton(buttonOption.value);
              }}
              key={`button-${buttonOption.value}`}
              buttonText={buttonOption.value}
            />
          );
        })}
      </OptionsContainer>
    </ButtonGroupContainer>
  );
}
