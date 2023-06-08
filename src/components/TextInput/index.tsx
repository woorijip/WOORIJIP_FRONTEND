import { useEffect, useState } from "react";
import styled from "styled-components";

interface TextInputProps {
  id: string;
  labelText: string;
  placeholder?: string;
  maxLength?: number;
  inputState: string;
  setInputState?: (str: string) => void;
  onClick?: () => void;
}

export const TextInput = ({
  id,
  labelText,
  placeholder,
  maxLength,
  inputState,
  setInputState,
  onClick,
}: TextInputProps) => {
  const [length, setLength] = useState<number>(0);
  const isMaxLengthSet = maxLength !== undefined;
  const isLengthUnderMaxLength = (str: string) =>
    maxLength === undefined ? true : str.length <= maxLength;
  useEffect(() => setLength(inputState.length), [inputState]);
  return (
    <Wrapper isInputFilled={length > 0}>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        value={inputState}
        onChange={(e) =>
          setInputState &&
          isLengthUnderMaxLength(e.currentTarget.value) &&
          setInputState(e.currentTarget.value)
        }
        onClick={() => onClick && onClick()}
      />
      {isMaxLengthSet && <span>{`${length} / ${maxLength}`}</span>}
    </Wrapper>
  );
};

interface WrapperProps {
  isInputFilled: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;

  margin-top: 20px;

  width: 100%;

  label {
    color: ${({ theme }) => theme.colors.gray9};
    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular10}
  }

  input {
    margin-top: 8px;
    padding: 0 10px;

    width: 100%;
    height: 40px;

    color: ${({ theme }) => theme.colors.gray9};
    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular14}

    border: 1px solid ${({ theme }) =>
      (props) =>
        props.isInputFilled ? theme.colors.gray9 : theme.colors.gray3};
    border-radius: 2px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray3};
    }
  }

  span {
    position: absolute;
    top: 43px;
    right: 15px;

    color: ${({ theme }) =>
      (props) =>
        props.isInputFilled ? theme.colors.gray9 : theme.colors.gray3};
    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular10}

    transition: color 0.25s ease;
  }
`;
