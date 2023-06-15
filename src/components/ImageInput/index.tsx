import styled from "styled-components";
import { CameraImg } from "../../assets/images";
import { readFile } from "../../libs/constant/readFile";

interface ImageInputProps {
  id: string;
  inputState: string[];
  setInputState: (str: string) => void;
}

export const ImageInput = ({
  id,
  inputState,
  setInputState,
}: ImageInputProps) => {
  return (
    <Wrapper>
      {inputState.length > 0 && (
        <ul>
          {inputState.map((v, i) => (
            <li key={`image${i}`}>
              <figure>
                <img src={v} alt="" width="120" height="120" />
              </figure>
            </li>
          ))}
        </ul>
      )}
      <label htmlFor={id} aria-label="모임 설명 사진 추가">
        <input
          id={id}
          type="file"
          accept="image/*"
          onChange={(e) => readFile(e.currentTarget, setInputState)}
        />
        <picture>
          <source type="image/svg+xml" srcSet={CameraImg} />
          <img alt="이미지 추가" width={18} height={18} />
        </picture>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 60px;
  width: 100%;

  display: flex;
  flex-direction: column;

  ul {
    margin-top: 20px;

    width: 100%;

    display: flex;
    gap: 20px;

    overflow-x: scroll;

    list-style-type: none;

    li {
      img {
        border-radius: 2px;
        object-fit: cover;
      }
    }
  }

  label {
    position: relative;

    margin-top: 20px;

    input {
      position: absolute;
      top: 0;

      width: 100%;
      height: 100%;

      visibility: hidden;
    }
  }
`;
