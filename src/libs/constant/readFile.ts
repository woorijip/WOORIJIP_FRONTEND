import { GroupType } from "../../types/group/load";

export const readFile = (
  refObj: React.RefObject<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<GroupType>>
) => {
  const fReader = new FileReader();
  if (refObj.current && refObj.current.files)
    try {
      fReader.readAsDataURL(refObj.current.files[0]);
    } catch {
      return;
    }
  fReader.onloadend = (event: ProgressEvent<FileReader>) => {
    if (event && event.target && event.target.result)
      setState((prevState) => {
        return {
          ...prevState,
          thumbnail: event.target?.result as string,
        };
      });
  };
};
