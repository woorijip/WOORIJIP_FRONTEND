import styled from "styled-components";
import { dummyCategories } from "../../libs/constant/category";

interface CategoryInputProps {
  inputState: string[];
  setInputState: (str: string) => void;
}

export const CategoryInput = ({
  inputState,
  setInputState,
}: CategoryInputProps) => {
  return (
    <Wrapper>
      {dummyCategories.map((v, i) => (
        <li
          key={`category${i}`}
          className={inputState.includes(v) ? "active" : undefined}
        >
          <button type="button" onClick={() => setInputState(v)}>
            <div />
            {v}
          </button>
        </li>
      ))}{" "}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 5%;

  list-style-type: none;

  li {
    margin-top: 20px;

    width: 30%;

    button {
      background-color: transparent;

      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      cursor: pointer;
      border: none;

      div {
        background-color: ${({ theme }) => theme.colors.gray4};

        width: 100%;
        height: 90px;

        border-radius: 50%;
      }
    }
  }

  li:nth-child(1) {
    margin-top: 0;
  }

  li:nth-child(2) {
    margin-top: 0;
  }

  li:nth-child(3) {
    margin-top: 0;
  }

  .active {
    button {
      div {
        border: 2px solid ${({ theme }) => theme.colors.main};
      }
    }
  }
`;
