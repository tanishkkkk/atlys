import React from "react";

const Post = () => {
  return (
    <div className="border-2 rounded-lg border-[#35373B] bg-[#27292D] w-full mt-4 pt-6 px-5">
      <div className="flex justify-between items-start">
        <div className="flex items-center mb-4 gap-3">
          <img src="/images/Female.png" alt="avatar" />
          <div className="flex flex-col">
            <p className="">Amet minim</p>
            <p className="text-sm text-[#7F8084]">5mins ago</p>
          </div>
        </div>
        <img src="/images/Dots.png" alt="avatar" />
      </div>
      <div className="flex gap-3 items-center bg-[#191920] p-4 rounded-lg w-full">
        <div className="bg-[#27292D] py-[12px] px-[15px] rounded-full">👋</div>
        <p className="bg-transparent outline-none flex-1 text-sm text-[#7F8084]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. <br /> Velit officia consequat duis enim velit mollit.
          Exercitation veniam <br /> consequat sunt nostrud amet.
        </p>
      </div>
      <div className="flex gap-2 pt-4 pb-6">
        <img src="/images/Comment.png" alt="avatar" />
        <p className="text-[#7F8084] text-sm">24 comments</p>
      </div>
    </div>
  );
};

export default Post;
