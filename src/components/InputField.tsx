import { ChangeEvent } from "react";

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
    <div className="flex flex-col w-full gap-2 m-2">
      <label htmlFor={id} className="text-sm font-medium text-[#C5C7CA]">
        {label}
      </label>
      <input
        className="bg-transparent border p-3 rounded border-[#35373B] placeholder:text-[#7F8084] focus-visible:outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default InputField;
