"use client";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border p-6 rounded w-96">
        <h1 className="text-2xl font-bold mb-4">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}