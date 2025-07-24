import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import UserPosts from "./pages/UserPosts";
import AdminPosts from "./pages/AdminPosts";
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post/:postSlug" element={<PostPage />} />

        {/* Protected Routes for any logged-in user */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/posts" element={<UserPosts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
          <Route path="/admin/posts" element={<AdminPosts />} />
        </Route>

        {/* Admin-Only Routes */}
        {/* If you want UpdatePost only for admin, move it here */}
        {/* 
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route> 
        */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
