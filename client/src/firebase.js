import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e6c94.firebaseapp.com",
  projectId: "mern-blog-e6c94",
  storageBucket: "mern-blog-e6c94.appspot.com", // ✅ fixed
  messagingSenderId: "676871018845",
  appId: "1:676871018845:web:fb3e74ac30621155d5b0b4",
  // measurementId: "G-2ZF1D268PW" // optional
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // optional
console.log("API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
