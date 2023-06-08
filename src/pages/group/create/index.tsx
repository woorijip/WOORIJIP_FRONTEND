import styled from "styled-components";
import { useState } from "react";
import { GroupType } from "../../../types/group/load";
import { ThumbnailInput } from "../../../components/ThumbnailInput";
import { SubTextInput } from "../../../components/SubTextInput";
import { MarkdownInput } from "../../../components/MarkdownInput";
import { TextInput } from "../../../components/TextInput";
// import { ImageInput } from "../../../components/ImageInput";
import { openLocationPopup } from "../../../libs/constant/openLocationPopup";

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
      <ThumbnailInput
        id="addImg"
        inputState={inputState.thumbnail}
        setInputState={(newThumbnail) =>
          setInputState((prevState) => {
            return { ...prevState, thumbnail: newThumbnail };
          })
        }
      />
      <TextInput
        id="name"
        labelText="모임 제목"
        placeholder="모임 이름을 입력해주세요."
        maxLength={15}
        inputState={inputState.name}
        setInputState={(newName: string) =>
          setInputState((prevState) => {
            return { ...prevState, name: newName };
          })
        }
      />
      <SubTextInput
        id="introduction"
        placeholder="모임을 한 줄로 소개해주세요!"
        maxLength={30}
        inputState={inputState.introduction}
        setInputState={(newIntroduction: string) =>
          setInputState((prevState) => {
            return { ...prevState, introduction: newIntroduction };
          })
        }
      />
      <TextInput
        id="location"
        labelText="주소 검색"
        placeholder="주소를 검색해주세요."
        inputState={inputState.location}
        onClick={() =>
          openLocationPopup((newLocation: string) =>
            setInputState((prevState) => {
              return { ...prevState, location: newLocation };
            })
          )
        }
      />
      <MarkdownInput
        id="description"
        labelText="모임 설명"
        placeholder="모임 설명을 입력해주세요."
        inputState={inputState.description}
        setInputState={(newDescription: string) =>
          setInputState((prevState) => {
            return { ...prevState, description: newDescription };
          })
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 48px;
  padding: 0 40px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
