import React from "react";
import InputField from "../components/InputField";
import ActionButton from "../components/ActionButton";

const Login = () => {
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

        <InputField
          placeholder="Enter your email or username"
          label="Email or Username"
          changeHandler={(e) => console.log(e)}
          type="text"
          id="name"
        />
        <InputField
          placeholder="Enter your password"
          label="Password"
          changeHandler={(e) => console.log(e)}
          type="text"
          id="password"
        />
        <ActionButton
          text="Login now"
          clickHandler={() => console.log("click me")}
        />
        <p className="w-full text-[#6B6C70]">
          Not registered yet? <span className="text-[#C5C7CA]">Register →</span>
        </p>
      </div>
    </main>
  );
};

export default Login;
