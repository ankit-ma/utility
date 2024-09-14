"use server";
import Link from "next/link";
let pending = false;
export async function registerFun(formData: FormData) {
  pending = true;
  console.log("In register");
  const p = await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(formData);
  pending = false;
  return p;
}
export default async function Register() {
  return (
    <>
      <form
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-xl"
        action={registerFun}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#00b4d8]">Register</h2>

        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="employeeName"
                className="w-full px-3 py-2 border-b-2 border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border-b-2 border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Designation</label>
              <select
                name="designation"
                className="w-full px-3 py-2 border-b-2 border-blue-500 focus:outline-none"
              >
                <option value="">Select designation</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="manager">Manager</option>
                <option value="cashier">Cashier</option>
              </select>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full px-3 py-2 border-b-2 border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border-b-2 border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-3 py-2 border-b-2 border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#0077b6] text-white py-2 rounded hover:bg-[#00b4d8]"
        >
          {pending ? "Submitting ...." : "Register"}
        </button>
        <div className="w-full flex justify-center py-2 rounded glow-text">
          <Link href="/login">Login</Link>
        </div>
      </form>
    </>
  );
}
