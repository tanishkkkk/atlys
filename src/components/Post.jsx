import React from "react";

const Post = () => {
  return (
    <div className="border-2 rounded-lg border-[#35373B] bg-[#27292D] w-full mt-10 pt-6 px-5">
      <div className="flex items-center mb-4">
        <div className="bg-[#27292D] py-[12px] px-[15px] rounded-full">👋</div>
        <div className="flex flex-col">
          <p className="">Amet minim</p>
          <p className="text-sm text-[#7F8084]">5mins ago</p>
        </div>
      </div>
      <div className="flex gap-3 items-center bg-[#191920] p-4 rounded-lg w-full">
        <div className="bg-[#27292D] py-[12px] px-[15px] rounded-full">👋</div>
        <p className="bg-transparent outline-none flex-1 text-sm text-[#7F8084]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default Post;
