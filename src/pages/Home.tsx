import { useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { POST_LIST } from "../constant";
import SignupModal from "../components/SignupModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(isModalOpen);
  return (
    <main className="flex justify-center flex-col items-center mt-14 relative">
      <div className="w-[50%]">
        <h2 className="text-[28px] text-[#C5C7CA]">Hello Jane</h2>
        <p className="text-[#7F8084] w-[80%]" onClick={openModal}>
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <CreatePost />
        {POST_LIST.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      {isModalOpen && (
        <SignupModal isModalOpen={isModalOpen} closeModal={closeModal} />
      )}
    </main>
  );
};

export default Home;
