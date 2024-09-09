import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent, useState } from "react";

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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full gap-2 m-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        {id === "password" && (
          <button className="text-[12px]">Forgot password?</button>
        )}
      </div>
      <div className="relative">
        <input
          className="w-full bg-transparent border p-3 rounded border-[#35373B] placeholder:text-[#7F8084] focus-visible:outline-none focus:border-[#4A4C50]"
          id={id}
          type={isPassword && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          onChange={(e) => changeHandler(e)}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7F8084] hover:text-white focus:outline-none"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
