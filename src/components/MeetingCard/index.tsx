import styled from "styled-components";
import { MeetingType } from "../../types/meeting/load";

interface MeetingCardProps {
  meetingState: MeetingType;
  deleteThis: () => void;
}

export const MeetingCard = ({ meetingState, deleteThis }: MeetingCardProps) => {
  return (
    <Wrapper>
      <p>{`${meetingState.date}, ${meetingState.time}, ${meetingState.maxMember}명`}</p>
      <button type="button" onClick={deleteThis}>
        ✖
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  padding: 4px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray9};
  border-radius: 16px;

  p {
    color: ${({ theme }) => theme.colors.gray9};
    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular12}
  }

  button {
    background-color: transparent;

    color: ${({ theme }) => theme.colors.gray9};
    ${({ theme }) => theme.fonts.AppleSDGothicNeoRegular12}
    line-height: 1px;

    border: none;
  }
`;
