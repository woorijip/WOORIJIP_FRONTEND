import { useRecoilState } from "recoil";
import {
  GroupCreateInputStateAtom,
  GroupCreateInputStateAtomType,
} from "../../../../atoms/groupCreateInputState";
import styled from "styled-components";
import { TextInput } from "../../../../components/TextInput";
import { SpaceTypeInput } from "../../../../components/placeInput";
import { ConfirmButton } from "../../../../components/confirmButton";
import { useNavigate } from "react-router-dom";

export const GroupCreateSecondPage = () => {
  const [inputState, setInputState] =
    useRecoilState<GroupCreateInputStateAtomType>(GroupCreateInputStateAtom);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <SpaceTypeInput
        labelText="공간 유형"
        inputState={inputState.spaceType}
        setInputState={(newSpaceType) =>
          setInputState((prevState) => ({
            ...prevState,
            spaceType: newSpaceType,
          }))
        }
      />
      <TextInput
        id="time"
        labelText="이용 시간"
        placeholder="이용 시간을 선택해 주세요."
        inputState={inputState.meetingSchedules.time}
        setInputState={(newTime: string) =>
          setInputState((prevState) => ({
            ...prevState,
            meetingSchedules: { ...prevState.meetingSchedules, time: newTime },
          }))
        }
        inputType="time"
      />
      <TextInput
        id="date"
        labelText="모집 날짜"
        placeholder="날짜를 추가해 주세요."
        inputState={inputState.meetingSchedules.date}
        setInputState={(newDate: string) =>
          setInputState((prevState) => ({
            ...prevState,
            meetingSchedules: { ...prevState.meetingSchedules, date: newDate },
          }))
        }
        inputType="date"
      />
      <TextInput
        id="member"
        labelText="모집 인원"
        placeholder="인원을 입력해 주세요. (숫자만 입력해 주세요.)"
        inputState={inputState.meetingSchedules.maxMember}
        setInputState={(newMaxMember: number) => {
          if (!isNaN(newMaxMember))
            setInputState((prevState) => ({
              ...prevState,
              meetingSchedules: {
                ...prevState.meetingSchedules,
                maxMember: newMaxMember,
              },
            }));
        }}
        inputType="number"
      />
      <TextInput
        id="category"
        labelText="모임 카테고리"
        placeholder="카테고리를 선택해 주세요."
        inputState={inputState.categories.join(", ")}
        onClick={() => navigate("/group/create/category")}
      />
      <ConfirmButton
        labelText="다음"
        onClick={() => navigate("/group/create/done")}
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
`;
