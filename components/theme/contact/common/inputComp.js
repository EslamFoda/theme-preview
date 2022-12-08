import { useState } from "react";

const InputComp = ({ placeHolder, required, inputType }) => {
  const [val, setVal] = useState("");

  return (
    <>
      {inputType === "textarea" ? (
        <textarea
          onChange={(e) => {
            setVal(e.target.value);
          }}
          className={`appearance-none h-36 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
          value={val}
          placeholder={placeHolder}
          required={required}
        />
      ) : (
        <input
          onChange={(e) => {
            setVal(e.target.value);
          }}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
          type={inputType}
          value={val}
          placeholder={placeHolder}
          required={required}
        />
      )}
    </>
  );
};

export default InputComp;
