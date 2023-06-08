import styled from "styled-components";
import { CheckImg } from "../../assets/images";
import { dummyFontMenu } from "../../libs/constant/fontMenu";
import { dummyColorMenu } from "../../libs/constant/colorMenu";

interface StyleMenuProps {
  menuType: "font" | "color";
  styleState: string;
  setStyleState: (str: string) => void;
}

export const StyleMenu = ({
  menuType,
  styleState,
  setStyleState,
}: StyleMenuProps) => {
  const isMenuTypeFont = menuType === "font";
  const menu = isMenuTypeFont ? dummyFontMenu : dummyColorMenu;
  return (
    <Wrapper menuType={menuType}>
      {menu.map((v, i) => (
        <button
          key={`${menuType}menu${i}`}
          aria-label={menuType === "color" ? v : undefined}
          className={styleState === v ? "active" : undefined}
          type="button"
          onClick={() => setStyleState(v)}
        >
          {menuType === "font" && v}
          {menuType === "color" && styleState === v && (
            <picture>
              <source type="image/svg+xml" srcSet={CheckImg} />
              <img alt="선택됨" width={8} height={7} />
            </picture>
          )}
        </button>
      ))}
    </Wrapper>
  );
};

interface WrapperProps {
  menuType: "font" | "color";
}

const Wrapper = styled.div<WrapperProps>`
  width: max-content;

  display: flex;
  align-items: flex-end;

  ${(props) => props.menuType === "font" && "gap: 16px;"}
  ${(props) => props.menuType === "color" && "gap: 8px;"}

  button {
    background-color: transparent;

    border: none;
    cursor: pointer;

    ${({ theme }) =>
      (props) =>
        props.menuType === "font" &&
        `color: ${theme.colors.gray4};

        transition: color 0.25s ease;

        :nth-child(1) {
        ${theme.fonts.AppleSDGothicNeoRegular18}
        }

        :nth-child(2) {
        ${theme.fonts.AppleSDGothicNeoRegular14}
        }

        :nth-child(3) {
        ${theme.fonts.AppleSDGothicNeoRegular10}
        }`}

    ${({ theme }) =>
      (props) =>
        props.menuType === "color" &&
        `width: 16px;
    height: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    :nth-child(1) {
      background-color: ${theme.colors.gray9};
    }

    :nth-child(2) {
      background-color: ${theme.colors.gray4};
    }
    
    :nth-child(3) {
      background-color: ${theme.colors.main};
    }`}

    picture {
      display: flex;
    }
  }

  ${({ theme }) =>
    (props) =>
      props.menuType === "font" &&
      `.active {
    color: ${theme.colors.gray9};
  }`}
`;
