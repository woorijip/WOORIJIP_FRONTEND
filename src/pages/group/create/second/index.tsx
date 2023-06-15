import { useRecoilState } from "recoil";
import {
  GroupCreateInputStateAtom,
  GroupCreateInputStateAtomType,
} from "../../../../atoms/groupCreateInputState";
import styled from "styled-components";
import { TextInput } from "../../../../components/TextInput";
import { SpaceTypeInput } from "../../../../components/PlaceInput";
import { ConfirmButton } from "../../../../components/ConfirmButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MeetingType } from "../../../../types/meeting/load";
import { MeetingCard } from "../../../../components/MeetingCard";
import { groupCreate } from "../../../../libs/apis/group/create";

export const GroupCreateSecondPage = () => {
  const [inputState, setInputState] =
    useRecoilState<GroupCreateInputStateAtomType>(GroupCreateInputStateAtom);
  const [meetingState, setMeetingState] = useState<MeetingType>({
    date: "",
    maxMember: 0,
    time: "",
  });
  const navigate = useNavigate();
  const isInputStateSet =
    inputState.spaceType !== "" &&
    inputState.meetingSchedules.length > 0 &&
    inputState.categories.length >= 3;
  const isMeetingStateSet =
    meetingState.date !== "" &&
    meetingState.maxMember > 0 &&
    meetingState.time !== "";
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
      <form onSubmit={(e) => e.preventDefault()}>
        <TextInput
          id="time"
          labelText="이용 시간"
          placeholder="이용 시간을 선택해 주세요."
          inputState={meetingState.time}
          setInputState={(newTime: string) =>
            setMeetingState((prevState) => ({
              ...prevState,
              time: newTime,
            }))
          }
          inputType="time"
        />
        <TextInput
          id="date"
          labelText="모집 날짜"
          placeholder="날짜를 추가해 주세요."
          inputState={meetingState.date}
          setInputState={(newDate: string) =>
            setMeetingState((prevState) => ({
              ...prevState,
              date: newDate,
            }))
          }
          inputType="date"
        />
        <TextInput
          id="member"
          labelText="모집 인원"
          placeholder="인원을 입력해 주세요. (숫자만 입력해 주세요.)"
          inputState={meetingState.maxMember}
          setInputState={(newMaxMember: number) => {
            if (!isNaN(newMaxMember))
              setMeetingState((prevState) => ({
                ...prevState,
                maxMember: newMaxMember,
              }));
          }}
          inputType="number"
        />
        <ConfirmButton
          position="relative"
          labelText="일정 추가"
          disabled={isMeetingStateSet}
          onClick={() => {
            if (
              isMeetingStateSet &&
              !inputState.meetingSchedules.some(
                (meeting) =>
                  meeting.date === meetingState.date &&
                  meeting.time === meetingState.time
              )
            ) {
              setInputState((prevState) => ({
                ...prevState,
                meetingSchedules: [...prevState.meetingSchedules, meetingState],
              }));
              setMeetingState({ date: "", maxMember: 0, time: "" });
            }
          }}
        />
      </form>
      <ul>
        {inputState.meetingSchedules.map((v1, i) => (
          <MeetingCard
            key={`meeting${i}`}
            meetingState={v1}
            deleteThis={() => {
              setInputState((prevState) => ({
                ...prevState,
                meetingSchedules: prevState.meetingSchedules.filter(
                  (v2) => v1.date !== v2.date || v1.time !== v2.time
                ),
              }));
            }}
          />
        ))}
      </ul>
      <TextInput
        id="category"
        labelText="모임 카테고리"
        placeholder="카테고리를 선택해 주세요."
        inputState={inputState.categories.join(", ")}
        onClick={() => navigate("/group/create/category")}
      />
      <ConfirmButton
        position="fixed"
        labelText="다음"
        disabled={isInputStateSet}
        onClick={async () => {
          const data = await groupCreate(inputState);
          console.log(inputState);
          if (data) navigate("/group/create/done");
        }}
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

  > form {
    width: 100%;

    button {
      width: 100%;
    }
  }

  > ul {
    margin-top: 20px;

    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;

    list-style-type: none;
  }
`;
