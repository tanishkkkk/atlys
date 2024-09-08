import React from "react";
import InputField from "./InputField";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";
import { SIGNUP_FIELDS } from "../constant";

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
        className="border-2 w-[463px] relative border-[#525458] rounded-lg flex items-center flex-col p-6 bg-[#27292D]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="bg-[#000000] p-[7px] rounded-full absolute right-3 top-3"
          onClick={closeModal}
        >
          <img src="/images/Cross.png" alt="cross-icon" />
        </button>
        <h4 className="text-[#6B6C70] text-sm font-medium mt-4">SIGN UP</h4>
        <p className="text-white font-semibold mb-11">
          Create an account to continue
        </p>

        {SIGNUP_FIELDS.map((field) => (
          <InputField
            key={field.id}
            placeholder={field.placeholder}
            label={field.label}
            changeHandler={field.handler}
            id={field.id}
          />
        ))}
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
