import { useEffect, useState } from "react";

interface LineStateType {
  placeholder?: string;
  style: string;
  value: string;
}

export const useMarkdown = (
  inputRef: React.MutableRefObject<HTMLDivElement[] | HTMLTextAreaElement[]>,
  placeholder?: string
) => {
  const [styleState, setStyleState] = useState({
    font: "본문",
    color: "검은색",
  });
  const [lineState, setLineState] = useState<LineStateType[]>([
    {
      placeholder: placeholder || "",
      style: `${styleState.font} ${styleState.color}`,
      value: "",
    },
  ]);
  const [indexState, setIndexState] = useState<number>(-1);
  const resizeTextarea = (element: HTMLTextAreaElement) => {
    element.style.height = "0";
    element.style.height = element.scrollHeight + "px";
  };
  useEffect(() => {
    if (indexState > -1) {
      const newLine = [...lineState];
      newLine[indexState].style = `${styleState.font} ${styleState.color}`;
      setLineState(newLine);
      inputRef.current[indexState + 1].focus();
      setTimeout(
        () =>
          resizeTextarea(
            inputRef.current[indexState + 1] as HTMLTextAreaElement
          ),
        0
      );
    } else resizeTextarea(inputRef.current[1] as HTMLTextAreaElement);
  }, [styleState]);
  return {
    resizeTextarea,
    indexState,
    setIndexState,
    lineState,
    setLineState,
    styleState,
    setStyleState,
  };
};
