import styled from "styled-components";
import { dummySpaceTypes } from "../../libs/constant/spaceType";

interface SpaceTypeInputProps {
  labelText: string;
  inputState: string;
  setInputState: (str: string) => void;
}

export const SpaceTypeInput = ({
  labelText,
  inputState,
  setInputState,
}: SpaceTypeInputProps) => {
  return (
    <Wrapper>
      <label>{labelText}</label>
      <ul>
        {dummySpaceTypes.map((v, i) => (
          <li
            key={`category${i}`}
            aria-label="공간 유형 선택"
            className={inputState === v ? "active" : undefined}
          >
            <button type="button" onClick={() => setInputState(v)}>
              {v}
            </button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors.gray9};
    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular10}
  }

  ul {
    margin-top: 12px;

    display: flex;
    flex-flow: row wrap;
    gap: 10px;

    list-style-type: none;

    li {
      button {
        background-color: transparent;

        padding: 2px 16px;

        color: ${({ theme }) => theme.colors.gray5};
        ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular12}

        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.colors.gray4};
        border-radius: 16px;
      }
    }

    .active {
      button {
        color: ${({ theme }) => theme.colors.gray9};

        border: 1px solid ${({ theme }) => theme.colors.gray9};
      }
    }
  }
`;
