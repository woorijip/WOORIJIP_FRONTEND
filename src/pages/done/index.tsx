import styled from "styled-components";
import { ConfirmButton } from "../../components/ConfirmButton";
import { DoneImg } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export const DonePage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1>호스트가 된 것을 축하드려요!</h1>
      <div>
        <span />
        <figure>
          <picture>
            <source type="image/svg+xml" srcSet={DoneImg} />
            <img alt="" />
          </picture>
        </figure>
      </div>
      <ConfirmButton position="fixed" labelText="완료" onClick={() => {}} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 48px 0;
  padding: 0 40px;

  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    position: relative;

    > span {
      position: absolute;
      top: -1px;
      left: -1px;

      background-color: #fff;

      width: 75px;
      height: 75px;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray9};
    font-weight: 400;
    ${({ theme }) => theme.fonts.NanumMyeongjoRegular18}
  }
`;
