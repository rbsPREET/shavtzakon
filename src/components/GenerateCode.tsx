import { useState } from "react";
import { GenerateGenericCode } from "../lib/helpers";
import { CopyIcon } from "../lib/icons";

type GenerateCodeProps = {
  setGenerateNewCode: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
};

export const GenerateCode = ({
  setGenerateNewCode,
  handleSubmit,
}: GenerateCodeProps) => {
  const [activityCode, setaActivityCode] = useState(GenerateGenericCode());
  const [secretCode, setSecretCode] = useState(GenerateGenericCode(true));

  return (
    <div className="flex w-full flex-col items-start gap-10">
      <div className="flex flex-col gap-2">
        <h4 className="text-md underline underline-offset-2">קוד תעסוקה:</h4>
        <span>{activityCode}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-md underline underline-offset-2">קוד סודי:</h4>
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => alert("בפיתוח: העתקת קוד בלחיצה")}
        >
          <span className="w-fit bg-white p-2 text-black">{secretCode}</span>
          <CopyIcon />
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => setGenerateNewCode(false)}
          className="rounded-md bg-gray-500 px-3 py-2 hover:bg-gray-600"
        >
          ביטול
        </button>
        <button
          onClick={() => handleSubmit()}
          className="rounded-md bg-green-500 p-2 hover:bg-green-500/80"
        >
          צור תעסוקה חדשה
        </button>
      </div>
    </div>
  );
};
