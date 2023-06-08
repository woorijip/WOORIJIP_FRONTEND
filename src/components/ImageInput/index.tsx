import styled from "styled-components";
import { CameraImg } from "../../assets/images";

export const ImageInput = () => {
  return (
    <Wrapper>
      <button aria-label="모임 설명 사진 추가" type="button">
        <picture>
          <source type="image/svg+xml" srcSet={CameraImg} />
          <img alt="이미지 추가" width={18} height={18} />
        </picture>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
