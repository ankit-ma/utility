"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout, login } from "@/redux/authSlice";
import { useRouter } from "next/navigation";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  useEffect(() => {
    const storedUser =
      typeof window !== "undefined" ? localStorage.getItem("user-data") : null;

    if (storedUser) {
      const userData = storedUser ? JSON.parse(storedUser) : null;
      dispatch(login({ firstName: userData.userFirstName }));
    }
  }, []);
  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold hover:text-black">UTILITY</h1>
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <p className="text-lg">Welcome, {user.firstName}</p>
            ) : (
              <p className="text-lg"></p>
            )}

            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg focus:outline-none"
              >
                <span>Logout</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10v1"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
