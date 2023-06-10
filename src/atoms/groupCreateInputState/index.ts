import { atom } from "recoil";
import { MeetingType } from "../../types/meeting/load";

export interface GroupCreateInputStateAtomType {
  name: string;
  introduction: string;
  thumbnail: string;
  location: string;
  spaceType: string;
  spaceImages: string[];
  description: string;
  meetingSchedules: MeetingType;
  categories: string[];
}

export const GroupCreateInputStateAtom = atom<GroupCreateInputStateAtomType>({
  key: "scrollState",
  default: {
    name: "",
    introduction: "",
    thumbnail: "",
    location: "",
    spaceType: "",
    spaceImages: [],
    description: "",
    meetingSchedules: { date: "", maxMember: 0, time: "" },
    categories: [],
  },
});
