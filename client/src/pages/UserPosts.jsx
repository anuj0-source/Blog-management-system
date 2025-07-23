// src/pages/UserPosts.jsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

export default function UserPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await fetch(`/api/post/getPosts?userId=${currentUser._id}`);
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Error fetching user's posts", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser?._id) {
      fetchUserPosts();
    }
  }, [currentUser]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">My Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500">No posts uploaded yet.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
