import { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  isPassword: boolean;
}

const InputField = ({
  label,
  placeholder,
  changeHandler,
  id,
  isPassword,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full gap-2 m-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="text-sm font-medium text-[#C5C7CA]">
          {label}
        </label>
        {isPassword && (
          <button className="text-[12px]">Forgot password?</button>
        )}
      </div>
      <input
        className="bg-transparent border p-3 rounded border-[#35373B] placeholder:text-[#7F8084] focus-visible:outline-none"
        id={id}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default InputField;
