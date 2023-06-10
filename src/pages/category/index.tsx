import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  GroupCreateInputStateAtom,
  GroupCreateInputStateAtomType,
} from "../../atoms/groupCreateInputState";
import { CategoryInput } from "../../components/categoryInput";
import { ConfirmButton } from "../../components/confirmButton";
import { useNavigate } from "react-router-dom";

export const CategoryPage = () => {
  const [inputState, setInputState] =
    useRecoilState<GroupCreateInputStateAtomType>(GroupCreateInputStateAtom);
  const navigate = useNavigate();
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
        labelText="다음"
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
