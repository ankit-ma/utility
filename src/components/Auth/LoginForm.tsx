"use client";

import Link from "next/link";
import { loginSubmit } from "@/lib/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";

export default function LoginForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null); // Handle error state
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError(null); // Reset error

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const res = await loginSubmit(formData);
      console.log("Final place", res);

      // Store user data in local storage
      localStorage.setItem("user-data", JSON.stringify(res));
      dispatch(login({ firstName: res["userFirstName"] }));
      // Redirect to home page
      router.push("/home");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setPending(false); // Ensure this is called regardless of success or failure
    }
  };

  return (
    <>
      <form
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-[#00b4d8]">
          Login / Register
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}{" "}
        {/* Display error message */}
        <div className="m-6">
          <label className="block text-gray-700">Username (Email)</label>
          <input
            type="email"
            name="email"
            className="w-full px-2 py-2 border-b-2 border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="m-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-2 py-2 border-b-2 border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="m-6">
          <button
            type="submit"
            className="w-full bg-[#0077b6] text-white py-2 rounded-lg hover:bg-[#00b4d8]"
            disabled={pending} // Disable button while pending
          >
            {pending ? "Submitting..." : "Login"}
          </button>
        </div>
        <div className="text-center text-[#0077b6]">
          <Link href="/">Register</Link>
        </div>
      </form>
    </>
  );
}
