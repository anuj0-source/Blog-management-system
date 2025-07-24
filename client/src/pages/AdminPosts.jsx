// src/pages/AdminPosts.jsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";

export default function AdminPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user is not admin
    if (!currentUser?.isAdmin) {
      navigate("/"); // or show 403 page
      return;
    }

    const fetchAllPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts`);
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Failed to fetch all posts for admin", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, [currentUser, navigate]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Posts (Admin View)</h1>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
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
