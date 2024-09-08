import ActionButton from "./ActionButton";

const CreatePost = () => {
  return (
    <div className="border-2 rounded-lg border-[#35373B] bg-[#27292D] w-full mt-10 pt-6 px-5">
      <p className="text-lg my-3">Create post</p>
      <div className="flex gap-3 items-center bg-[#191920] p-4 rounded-lg w-full">
        <div className="bg-[#27292D] py-[12px] px-[15px] rounded-full">💬</div>
        <input
          type="text"
          placeholder="How are you feeling today?"
          className="bg-transparent outline-none flex-1 text-[#7F8084]"
        />
      </div>
      <div className="w-[20%] ml-auto">
        <ActionButton
          text="Post"
          clickHandler={() => console.log("click me")}
        />
      </div>
    </div>
  );
};

export default CreatePost;
