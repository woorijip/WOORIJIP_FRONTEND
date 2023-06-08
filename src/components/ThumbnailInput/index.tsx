import styled from "styled-components";
import { CameraImg } from "../../assets/images";
import { readFile } from "../../libs/constant/readFile";
import { useRef } from "react";

interface ThumbnailInputProps {
  id: string;
  inputState: string;
  setInputState: (str: string) => void;
}

export const ThumbnailInput = ({
  id,
  inputState,
  setInputState,
}: ThumbnailInputProps) => {
  // 브릿징 작업 필요, 에러 핸들링은
  // src\libs\constant\readFile.ts
  // 에서 fallback() 함수 수정 요망
  const isThumbnailSet = inputState.length > 0;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Wrapper htmlFor={id}>
      <input
        ref={inputRef}
        id={id}
        type="file"
        accept="image/*"
        onChange={(e) => readFile(e.currentTarget, setInputState)}
      />
      {isThumbnailSet && (
        <figure>
          <img src={inputState} alt="" />
        </figure>
      )}
      <button
        aria-label="모임 대표 사진 변경"
        type="button"
        onClick={() => inputRef.current?.click()}
      >
        <picture>
          <source type="image/svg+xml" srcSet={CameraImg} />
          <img alt="이미지 변경" width={18} height={18} />
        </picture>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;

  background-color: ${({ theme }) => theme.colors.gray3};

  width: 100%;
  height: 210px;

  border-radius: 2px;
  cursor: pointer;

  input {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    visibility: hidden;
  }

  figure img {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 2px;
  }

  button {
    position: absolute;
    right: 16px;
    bottom: 16px;

    background-color: ${({ theme }) => theme.colors.gray1};

    padding: 2px;

    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  picture {
    display: flex;
  }
`;
