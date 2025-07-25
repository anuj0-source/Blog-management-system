import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl pt-10">
          Welcome to my Blog
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Welcome to CodeVerse-blog! Here you'll find a wide range of articles,
          tutorials, and resources designed to help you grow as a developer.
          Whether you're interested in web development, software engineering,
          programming languages, or best practices in the tech industry, there's
          something here for everyone. Dive in and explore the content to expand
          your knowledge and skills.
        </p>
        {/* <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link> */}
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-3">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>

            <div className="flex flex-wrap gap-3 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            <div className="text-center mt-4">
              <Link
                to="/search"
                className="text-lg text-teal-500 hover:underline"
              >
                <u>
                  <strong>View all posts</strong>
                </u>
              </Link>
            </div>

            {/* Create Post Button below "View all posts" */}
            {/* Create Post Button below "View all posts" */}
<div className="text-center mt-4">
  <Link to="/create-post">
    <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
      ✍️ Create New Post
    </button>
  </Link>
</div>

          </div>
        )}
      </div>
    </div>
  );
}
