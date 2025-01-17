import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };

  useEffect(() => {
    document.title = "Signup | Gadget Heaven";
  }, []);

  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout");
        setUser(null);
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className="flex items-center justify-center h-[500px] bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg  relative -top-40">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleSignin}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-5"
        >
          Signin With Google
        </button>
        <button
          onClick={handleSignout}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-5"
        >
          Signout
        </button>
        <div>{user && <h2>{user.displayName}</h2>}</div>
      </div>
    </div>
  );
};

export default Signup;
