import React from "react";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="border- w-[463px] border-[#525458] rounded-lg flex items-center flex-col p-6 bg-[#27292D]">
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
      </div>
    </main>
  );
};

export default Login;
