import InputField from "../components/InputField";
import ActionButton from "../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { LOGIN_FIELDS } from "../constant";

const Login = () => {
  const navigate = useNavigate();

  return (
    <main className="flex justify-center flex-col items-center h-[100vh]">
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: "40px", height: "40px" }}
        className="mb-8"
      />

      <div className="border-2 w-[463px] border-[#525458] rounded-lg flex items-center flex-col p-6 bg-[#27292D]">
        <h4 className="text-[#6B6C70] text-sm font-medium mt-4">
          WELCOME BACK
        </h4>
        <p className="text-white font-semibold mb-11">Log into your account</p>
        {LOGIN_FIELDS.map((field) => (
          <InputField
            key={field.id}
            placeholder={field.placeholder}
            label={field.label}
            changeHandler={field.handler}
            id={field.id}
          />
        ))}
        <ActionButton text="Login now" clickHandler={() => navigate("/home")} />
        <p className="w-full text-[#6B6C70]">
          Not registered yet? <span className="text-[#C5C7CA]">Register →</span>
        </p>
      </div>
    </main>
  );
};

export default Login;
