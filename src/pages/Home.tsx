import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { POST_LIST } from "../constant";

const Home = () => {
  return (
    <main className="flex justify-center flex-col items-center mt-14">
      <div className="w-[50%]">
        <h2 className="text-[28px] text-[#C5C7CA]">Hello Jane</h2>
        <p className="text-[#7F8084] w-[80%]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <CreatePost />
        {POST_LIST.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
