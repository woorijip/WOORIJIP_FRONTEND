import axios from "axios";
import { GroupCreateInputStateAtomType } from "../../../../atoms/groupCreateInputState";
import { enumifySpaceType } from "../../../constant/enumify";

export const groupCreate = async ({
  name,
  introduction,
  thumbnail,
  location,
  spaceType,
  spaceImages,
  description,
  meetingSchedules,
  categories,
}: GroupCreateInputStateAtomType): Promise<boolean> =>
  await axios
    .post(
      `http://${import.meta.env.VITE_API_BASE_URL}/meetings`,
      {
        name: name,
        introduction: introduction,
        thumbnail: thumbnail,
        location: location,
        spaceType: enumifySpaceType(spaceType),
        spaceImages: spaceImages,
        description: description,
        meetingSchedules: meetingSchedules,
        categories: categories,
      },
      {
        headers: {
          Authorization: `Bearer eyJKV1QiOiJhY2Nlc3MiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmMiLCJpc3MiOiJhYmMiLCJNSUQiOiIyIiwiZXhwIjoxNzQ2NzIxMzkzfQ.MWr9AKX0lPBftp_5uhrRswDL_CtdhMLwYdt4XvTpzO4`,
        },
      }
    )
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
