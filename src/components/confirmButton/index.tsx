import styled from "styled-components";

interface ConfirmButtonProps {
  labelText: string;
  disabled?: boolean;
  position: "fixed" | "relative";
  onClick: () => void;
}

export const ConfirmButton = ({
  labelText,
  disabled,
  position,
  onClick,
}: ConfirmButtonProps) => {
  const isOptional = disabled !== undefined;
  return (
    <Wrapper
      type="button"
      disabled={isOptional && !disabled}
      position={position}
      onClick={onClick}
    >
      {labelText}
    </Wrapper>
  );
};

interface WrapperProps {
  position: "fixed" | "relative";
}

const Wrapper = styled.button<WrapperProps>`
  ${(props) =>
    props.position === "fixed" &&
    `position: fixed;
  bottom: 48px;
  width: calc(100% - 80px);`}

  background-color: ${({ theme }) => theme.colors.gray9};

  margin-top: 20px;

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

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray3};

    color: ${({ theme }) => theme.colors.gray1};
  }
`;
