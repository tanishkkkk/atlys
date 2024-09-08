import React from "react";
import InputField from "./InputField";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const SignupModal = ({ isModalOpen, closeModal }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 ${
        isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeModal}
    >
      {/* Modal */}

      <div
        className="border-2 w-[463px] border-[#525458] rounded-lg flex items-center flex-col p-6 bg-[#27292D]"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-[#6B6C70] text-sm font-medium mt-4">SIGN UP</h4>
        <p className="text-white font-semibold mb-11">
          Create an account to continue
        </p>

        <InputField
          placeholder="Enter your email"
          label="Email"
          changeHandler={(e) => console.log(e)}
          type="text"
          id="name"
        />
        <InputField
          placeholder="Choose a preferred username"
          label="Username"
          changeHandler={(e) => console.log(e)}
          type="text"
          id="password"
        />
        <InputField
          placeholder="Choose a strong password"
          label="Password"
          changeHandler={(e) => console.log(e)}
          type="text"
          id="password"
        />
        <ActionButton text="Continue" clickHandler={closeModal} />
        <p className="w-full text-[#6B6C70]">
          Already have an account?
          <span className="text-[#C5C7CA]"> Login →</span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
