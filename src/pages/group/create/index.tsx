import styled from "styled-components";
import { useState } from "react";
import { GroupType } from "../../../types/group/load";
import { readFile } from "../../../libs/constant/readFile";
import { ImageInput } from "../../../components/ImageInput";
import { TextInput } from "../../../components/TextInput";

export const GroupCreatePage = () => {
  const [inputState, setInputState] = useState<GroupType>({
    name: "",
    introduction: "",
    thumbnail: "",
    location: "",
    spaceType: "",
    spaceImages: [],
    description: "",
    meetingSchedules: [],
    categories: [],
  });

  return (
    <Wrapper>
      <ImageInput
        thumbnail={inputState.thumbnail}
        setThumbnail={(inputRef) => readFile(inputRef, setInputState)}
      />
      <TextInput
        id="title"
        labelText="모임 제목"
        placeholder="제목을 입력해주세요."
        maxLength={30}
      />
      {/* <AddressInput /> */}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 48px;

  width: 100vw;
  height: 100vh;

  padding: 0 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
