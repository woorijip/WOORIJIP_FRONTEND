import styled from "styled-components";
import { CameraImg } from "../../assets/images";
import { useRef } from "react";

interface ImageInputProps {
  thumbnail: string;
  setThumbnail: (newThumbnail: React.RefObject<HTMLInputElement>) => void;
}

export const ImageInput = ({ thumbnail, setThumbnail }: ImageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isThumbnailSet = thumbnail.length > 0;
  return (
    <Wrapper htmlFor="addImg">
      <input
        ref={inputRef}
        id="addImg"
        type="file"
        accept="images/*"
        capture={true}
        onChange={() => setThumbnail(inputRef)}
      />
      {isThumbnailSet && (
        <figure>
          <img src={thumbnail} alt="" />
        </figure>
      )}
      <picture>
        <source type="image/webp" srcSet={CameraImg} />
        <img alt="이미지 변경" width={24} height={24} />
      </picture>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;

  background-color: ${({ theme }) => theme.colors.gray3};

  width: 100%;
  height: 210px;

  border-radius: 2px;

  input {
    visibility: hidden;
  }

  picture {
    position: absolute;
    right: 16px;
    bottom: 16px;

    display: flex;
  }

  figure img {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 2px;
  }
`;
