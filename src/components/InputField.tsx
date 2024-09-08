import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id: string;
}

const InputField = ({
  label,
  placeholder,
  changeHandler,
  type,
  id,
}: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default InputField;
