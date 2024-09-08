interface ButtonProps {
  text: string;
  clickHandler: () => void;
}

const ActionButton = ({ text, clickHandler }: ButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className="bg-[#4A96FF] w-full text-white rounded font-medium p-3 my-5"
    >
      {text}
    </button>
  );
};

export default ActionButton;
