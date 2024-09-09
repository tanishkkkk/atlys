import { useEffect, useState } from "react";
import InputField from "./InputField";
import ActionButton from "./ActionButton";
import { LOGIN_FIELDS, SIGNUP_FIELDS } from "../constant";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const AuthModal = ({ isModalOpen, closeModal }: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isModalOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(closeModal, 300);
  };

  console.log(isLogin);
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Modal */}
      <div
        className={`border-2 w-[463px] relative border-[#525458] rounded-lg flex items-center flex-col p-6 bg-[#27292D] transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="bg-[#000000] p-[7px] rounded-full absolute right-3 top-3"
          onClick={handleClose}
        >
          <img src="/images/Cross.png" alt="cross-icon" />
        </button>
        <h4 className="text-[#6B6C70] text-sm font-medium mt-4">
          {isLogin ? "WELCOME BACK" : "SIGN UP"}
        </h4>
        <p className="text-white font-semibold mb-11">
          {isLogin ? "Log into your account" : "Create an account to continue"}
        </p>
        {(isLogin ? LOGIN_FIELDS : SIGNUP_FIELDS).map((field) => (
          <InputField
            key={field.id}
            placeholder={field.placeholder}
            label={field.label}
            changeHandler={field.handler}
            id={field.id}
            isPassword={field.isPassword}
          />
        ))}
        <ActionButton text="Continue" clickHandler={handleClose} />
        <div className="w-full flex gap-1 text-[#6B6C70]">
          <p>
            {isLogin ? "Not registered yet? " : "Already have an account? "}
          </p>
          <button
            onClick={() => setIsLogin((authVal) => !authVal)}
            className="text-[#c5c7ca]"
          >
            {isLogin ? "Register →" : "Login →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
