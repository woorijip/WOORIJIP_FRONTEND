export const enumifySpaceType = (spaceType: string) => {
  switch (spaceType) {
    case "집":
      return "HOUSE";
    case "가게":
      return "STORE";
    case "회사":
      return "COMPANY";
    case "공방":
      return "WORKSHOP";
    case "작업실":
      return "WORKSPACE";
    case "공유공간":
      return "SHARED_SPACE";
  }
};
