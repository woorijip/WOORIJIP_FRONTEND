import styled from "styled-components";

interface ConfirmButtonProps {
  labelText: string;
  onClick: () => void;
}

export const ConfirmButton = ({ labelText, onClick }: ConfirmButtonProps) => {
  return <Wrapper onClick={onClick}>{labelText}</Wrapper>;
};

const Wrapper = styled.button`
  position: fixed;
  bottom: 48px;

  background-color: ${({ theme }) => theme.colors.gray9};

  margin-top: 20px;

  width: calc(100% - 80px);
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray1};
  font-family: "NanumMyeongjoRegular";
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;

  border: none;
  border-radius: 2px;
`;
