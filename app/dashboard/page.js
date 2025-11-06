"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);


  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    razorpayId: "",
    razorpaySecret: "",
    coverPic: null,
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Handle backend upload or API request here
  };

  return (
    <div className="min-h-screen bg-[#0b1221] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-[#111a2e] p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to your dashboard</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0b1324] outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0b1324] outline-none"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block mb-2 text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0b1324] outline-none"
              placeholder="@username"
              required
            />
          </div>

          {/* Razorpay ID */}
          <div>
            <label className="block mb-2 text-gray-300">Razorpay ID</label>
            <input
              type="text"
              name="razorpayId"
              value={form.razorpayId}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0b1324] outline-none"
              required
            />
          </div>

          {/* Razorpay Secret */}
          <div>
            <label className="block mb-2 text-gray-300">Razorpay Secret</label>
            <input
              type="password"
              name="razorpaySecret"
              value={form.razorpaySecret}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0b1324] outline-none"
              required
            />
          </div>

          {/* Upload Cover Picture */}
          <div>
            <label className="block mb-2 text-gray-300">Cover Picture</label>
            <input
              type="file"
              name="coverPic"
              accept="image/*"
              onChange={handleFileChange}
              className="text-gray-300 bg-slate-800 p-2 rounded-lg w-full"
            />
            {form.coverPic && (
              <img
                src={URL.createObjectURL(form.coverPic)}
                alt="Cover Preview"
                className="mt-3 rounded-lg w-full h-40 object-cover"
              />
            )}
          </div>

          {/* Upload Profile Picture */}
          <div>
            <label className="block mb-2 text-gray-300">Profile Picture</label>
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleFileChange}
              className=" text-gray-300 bg-slate-800 p-2 rounded-lg w-full"
            />
            {form.profilePic && (
              <img
                src={URL.createObjectURL(form.profilePic)}
                alt="Profile Preview"
                className="mt-3 w-24 h-24 rounded-full object-cover"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
}
