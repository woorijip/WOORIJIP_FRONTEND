import { useEffect, useState } from "react";
import styled from "styled-components";

interface SubTextInputProps {
  id: string;
  placeholder: string;
  maxLength: number;
  inputState: string;
  setInputState: (str: string) => void;
}

export const SubTextInput = ({
  id,
  placeholder,
  maxLength,
  inputState,
  setInputState,
}: SubTextInputProps) => {
  const [length, setLength] = useState<number>(0);
  const isMaxLengthSet = maxLength !== undefined;
  const isLengthUnderMaxLength = (str: string) =>
    maxLength === undefined ? true : str.length <= maxLength;
  useEffect(() => setLength(inputState.length), [inputState]);
  return (
    <Wrapper>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        value={inputState}
        onChange={(e) => {
          if (isLengthUnderMaxLength(e.currentTarget.value)) {
            e.currentTarget.style.width = "117px";
            e.currentTarget.style.width = `${e.currentTarget.scrollWidth}px`;
            setInputState(e.currentTarget.value);
          }
        }}
      />
      {isMaxLengthSet && <span>{`${length} / ${maxLength}`}</span>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;

  width: 100%;

  display: flex;
  justify-content: space-between;

  input {
    background-color: ${({ theme }) => theme.colors.gray2};

    padding: 2px 4px;

    width: 117px;

    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular10}

    border: none;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray4};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.gray5};
    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular10}
  }
`;
