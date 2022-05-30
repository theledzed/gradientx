import styled from "styled-components";

const ButtonImgContainer = styled.a`
  display: inline-block;
  margin-top: 4px;
  margin-left: 8px;
  width: 75px;
  height: 32px;
  border: 2px solid #f1f4f8;
  border-radius: 6px;
  color: #3d4853;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  font-size: 0.8125rem;
  line-height: 1.75rem;
  cursor: pointer;
  background: ${(props) => `${props?.isSelected ? "#f1f4f8" : "#fff"}`};

  &:hover {
    background: #f1f4f8;
  }
`;

export default function ButtonImg({ svg, onClickButton, isSelected }) {
  return (
    <ButtonImgContainer isSelected={isSelected} onClick={onClickButton}>
      {svg}
    </ButtonImgContainer>
  );
}
