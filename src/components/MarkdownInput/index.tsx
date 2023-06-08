import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { StyleMenu } from "../StyleMenu";
import theme from "../../styles/theme";

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
  inputState: string;
  setInputState: (str: string) => void;
}

export const MarkdownInput = ({
  id,
  labelText,
  placeholder,
  inputState,
  setInputState,
}: MarkdownInputProps) => {
  const [currentNode, setCurrentNode] = useState<JSX.Element>(
    <p key="description1" style={{ color: theme.colors.gray1 }}></p>
  );
  const [nodeTree, setNodeTree] = useState<JSX.Element[]>([
    <span key="placeholder" style={{ color: theme.colors.gray4 }}>
      {placeholder}
    </span>,
  ]);
  const [styleState, setStyleState] = useState({
    font: "본문",
    color: "검은색",
  });
  const firstRunRef = useRef<boolean>(false);
  const textareaRef = useRef<HTMLParagraphElement>(null);
  const pushToNodeTree = (element: JSX.Element) => {
    if (currentNode.props.children)
      setNodeTree((prevState) => {
        return [...prevState, currentNode];
      });
    setCurrentNode(element);
  };
  useEffect(() => {
    switch (styleState.font) {
      case "제목":
        pushToNodeTree(
          <h1
            key={`description${nodeTree.length + 1}`}
            style={currentNode.props.style}
          ></h1>
        );
        break;
      case "본문":
        pushToNodeTree(
          <p
            key={`description${nodeTree.length + 1}`}
            style={currentNode.props.style}
          ></p>
        );
        break;
      case "주석":
        pushToNodeTree(
          <span
            key={`description${nodeTree.length + 1}`}
            style={currentNode.props.style}
          ></span>
        );
        break;
    }
  }, [styleState.font]);
  useEffect(() => {
    switch (styleState.color) {
      case "검은색":
        pushToNodeTree(
          <currentNode.type
            key={`description${nodeTree.length + 1}`}
            style={{ color: theme.colors.gray1 }}
          >
            {inputState}
          </currentNode.type>
        );
        break;
      case "회색":
        pushToNodeTree(
          <currentNode.type
            key={`description${nodeTree.length + 1}`}
            style={{ color: theme.colors.gray4 }}
          >
            {inputState}
          </currentNode.type>
        );
        break;
      case "노란색":
        pushToNodeTree(
          <currentNode.type
            key={`description${nodeTree.length + 1}`}
            style={{ color: theme.colors.main }}
          >
            {inputState}
          </currentNode.type>
        );
        break;
    }
  }, [styleState.color]);
  useEffect(
    () => setCurrentNode(<currentNode.type>{inputState}</currentNode.type>),
    [inputState]
  );
  return (
    <Wrapper>
      <label htmlFor={id} onClick={() => textareaRef.current?.focus()}>
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
        ref={textareaRef}
        id={id}
        contentEditable
        onClick={() => {
          if (firstRunRef.current === false) {
            firstRunRef.current = true;
            setNodeTree([]);
          }
        }}
        onInput={(e) => {
          setCurrentNode((prevState) => (
            <prevState.type key={prevState.key} {...prevState.props}>
              {textareaRef.current?.getElementsByTagName("div")[0].innerText}
            </prevState.type>
          ));
        }}
        suppressContentEditableWarning={true}
      >
        {nodeTree.filter((v) => v.props.children !== undefined).map((v) => v)}
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

  color: ${({ theme }) => theme.colors.gray4};
  ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular14}
`;
