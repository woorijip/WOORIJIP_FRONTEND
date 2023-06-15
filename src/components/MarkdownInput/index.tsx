import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { StyleMenu } from "../StyleMenu";
import theme from "../../styles/theme";
import { useMarkdown } from "../../hooks/useMarkdown";

// const colorText = () => {
//   const selection = window.getSelection();
//   const range = selection!.getRangeAt(0);
//   const selectedText = range.toString();
//   if (selectedText) {
//     const span = document.createElement("span");
//     span.style.color = "tomato";
//     range.surroundContents(span);
//   }
// };
//
// useEffect(() => {
//   const isInputStateSet = inputState !== undefined;
//   const isPlaceholderSet = placeholder !== undefined;
//   if (!isInputStateSet && isPlaceholderSet)
//     inputRef.current!.innerText = placeholder;
//   else if (isInputStateSet) inputRef.current!.innerHTML = inputState;
// }, []);

interface MarkdownInputProps {
  id: string;
  labelText: string;
  placeholder?: string;
  setInputState: (str: string) => void;
}

export const MarkdownInput = ({
  id,
  labelText,
  placeholder,
  setInputState,
}: MarkdownInputProps) => {
  const inputRef = useRef<HTMLDivElement[] | HTMLTextAreaElement[]>([]);
  const {
    resizeTextarea,
    indexState,
    setIndexState,
    lineState,
    setLineState,
    styleState,
    setStyleState,
  } = useMarkdown(inputRef, placeholder);
  useEffect(() => setInputState(JSON.stringify(lineState)), [lineState]);
  return (
    <Wrapper>
      <label htmlFor={id} onClick={() => inputRef.current[1].focus()}>
        {labelText}
      </label>
      <Menu>
        <StyleMenu
          menuType="font"
          styleState={styleState.font}
          setStyleState={(newFont) =>
            setStyleState((prevState) => {
              return {
                ...prevState,
                font: newFont,
              };
            })
          }
        />
        <StyleMenu
          menuType="color"
          styleState={styleState.color}
          setStyleState={(newColor) =>
            setStyleState((prevState) => {
              return {
                ...prevState,
                color: newColor,
              };
            })
          }
        />
      </Menu>
      <Input
        id={id}
        ref={(input) => (inputRef.current[0] = input!)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const newLine = [...lineState];
            newLine.splice(indexState + 1, 0, {
              style: `${styleState.font} ${styleState.color}`,
              value: "",
            });
            setLineState(newLine);
            setTimeout(
              () =>
                (
                  inputRef.current[indexState + 2] ||
                  inputRef.current[indexState + 1]
                ).focus(),
              0
            );
          }
        }}
      >
        {lineState.map((v, i) => (
          <textarea
            key={`description${i}`}
            ref={(input) => (inputRef.current[i + 1] = input!)}
            className={v.style}
            placeholder={v.placeholder}
            value={v.value}
            onFocus={(e) => {
              resizeTextarea(e.currentTarget);
              setIndexState(i);
            }}
            onChange={(e) => {
              const isInputEmpty = e.currentTarget.value === "";
              const formHasMoreThanOneChildren =
                inputRef.current[0]?.children.length! > 1;
              if (isInputEmpty && formHasMoreThanOneChildren) {
                const newLine = [...lineState];
                delete newLine[indexState];
                setLineState(newLine.filter((v) => v));
                inputRef.current[i].focus();
              } else {
                resizeTextarea(e.currentTarget);
                const newLine = [...lineState];
                newLine[indexState].value = e.currentTarget.value;
                setLineState(newLine);
              }
            }}
          />
        ))}
      </Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;

  width: 100%;

  label {
    color: ${({ theme }) => theme.colors.gray9};

    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular10}
  }
`;

const Menu = styled.div`
  margin-top: 8px;

  display: flex;
  justify-content: space-between;
`;

const Input = styled.div`
  margin-top: 20px;

  width: 100%;
  min-height: 22px;

  textarea {
    background-color: transparent;

    width: 100%;

    border: none;
    resize: none;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: ${theme.colors.gray4};
    }
  }

  .제목 {
    ${theme.fonts.AppleSDGothicNeoRegular18}
  }

  .본문 {
    ${theme.fonts.AppleSDGothicNeoRegular14}
  }

  .주석 {
    ${theme.fonts.AppleSDGothicNeoRegular10}
  }

  .검은색 {
    color: ${theme.colors.gray9};
  }

  .회색 {
    color: ${theme.colors.gray4};
  }

  .노란색 {
    color: ${theme.colors.main};
  }
`;
