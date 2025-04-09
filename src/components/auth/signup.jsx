// pages/register.js
"use client";
import { useState } from "react";
import axios from "axios";
import base_url from "../helper/baseurl";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(base_url + "/register", formData);

      toast.success("Registered successfully!", { position: "bottom-right" });
      router.push("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!", {
        position: "bottom-right",
      });
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["firstName", "lastName", "username", "email", "password", "profilePicture"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium capitalize">{field}</label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={field !== "profilePicture"}
                className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Register
          </button>
        </form>
        {err && <p className="text-center text-red-500 mt-4">Error in Registration</p>}
      </div>
    </div>
  );
}
