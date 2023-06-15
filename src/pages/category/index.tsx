import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  GroupCreateInputStateAtom,
  GroupCreateInputStateAtomType,
} from "../../atoms/groupCreateInputState";
import { CategoryInput } from "../../components/CategoryInput";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useNavigate } from "react-router-dom";

export const CategoryPage = () => {
  const [inputState, setInputState] =
    useRecoilState<GroupCreateInputStateAtomType>(GroupCreateInputStateAtom);
  const navigate = useNavigate();
  const isInputStateSet = inputState.categories.length >= 3;
  return (
    <Wrapper>
      <CategoryInput
        inputState={inputState.categories}
        setInputState={(newCategory: string) =>
          inputState.categories.includes(newCategory)
            ? setInputState((prevState) => ({
                ...prevState,
                categories: prevState.categories.filter(
                  (category) => category !== newCategory
                ),
              }))
            : setInputState((prevState) => ({
                ...prevState,
                categories: [...prevState.categories, newCategory],
              }))
        }
      />
      <ConfirmButton
        position="fixed"
        labelText="다음"
        disabled={isInputStateSet}
        onClick={() => navigate("/group/create/2")}
      />
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

  > ul {
    margin-bottom: 60px;
  }
`;
