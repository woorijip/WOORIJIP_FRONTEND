import { MeetingType } from "../../meeting/load";

export interface GroupType {
  name: string;
  introduction: string;
  thumbnail: string;
  location: string;
  spaceType: string;
  spaceImages: string[];
  description: string;
  meetingSchedules: MeetingType[];
  categories: string[];
}
