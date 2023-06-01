import { useEffect, useState } from "react";
import styled from "styled-components";

interface TextInputProps {
  id: string;
  labelText: string;
  placeholder?: string;
  maxLength?: number;
}

export const TextInput = ({
  id,
  labelText,
  placeholder,
  maxLength,
}: TextInputProps) => {
  const [inputState, setInputState] = useState<string>("");
  const [length, setLength] = useState<number>(0);
  const isMaxLengthSet = maxLength !== undefined;
  useEffect(() => setLength(inputState.length), [inputState]);
  return (
    <Wrapper>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        maxLength={30}
        value={inputState}
        onChange={(e) =>
          maxLength &&
          e.currentTarget.value.length <= maxLength &&
          setInputState(e.currentTarget.value)
        }
      />
      {isMaxLengthSet && <span>{`${length} / ${maxLength}`}</span>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  width: 100%;

  input {
    padding: 0 10px;
    margin-top: 8px;

    width: 100%;
    height: 40px;

    border: 1px solid ${({ theme }) => theme.colors.gray3};
    border-radius: 2px;
  }

  span {
    position: absolute;
    top: 45px;
    right: 15px;

    color: ${({ theme }) => theme.colors.gray3};
    font-size: 10px;
  }

  label {
    font-size: 10px;
  }
`;
