import styled from "styled-components";

const ButtonContainer = styled.a`
  display: inline-block;
  margin-top: 4px;
  margin-left: 8px;
  width: 256px;
  height: 48px;
  border: 2px solid #f1f4f8;
  border-radius: 6px;
  color: #3d4853;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  font-size: 0.8125rem;
  line-height: 2.75rem;
  margin-bottom: 1em;
  cursor: pointer;
  background: #f1f4f8;
  &:hover {
    background: #3d4853;
    color: #fff;
    -webkit-box-shadow: 0 7px 14px rgb(50 50 93 / 10%),
      0 3px 6px rgb(0 0 0 / 8%);
    box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }
`;

export default function LargeButton({ buttonText, onClickButton }) {
  return (
    <ButtonContainer onClick={onClickButton}>{buttonText}</ButtonContainer>
  );
}
