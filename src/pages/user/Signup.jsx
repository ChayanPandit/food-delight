import { useContext, useState } from "react";
import UserContext from "../../utils/UserContext";
import { userData } from "../../assets/dummydata";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    city: '', 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: userData.length + 1,
      name: formData.name,
      email: formData.email,
      city: formData.city, 
    };
    userData.push(newUser);
    setUser({
      name: newUser.name,
      email: newUser.email,
      city: newUser.city,
    });
    navigate('/');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="rounded-2xl border bg-white text-gray-900 shadow-sm w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col text-center space-y-1.5 p-6">
          <h3 className="whitespace-nowrap font-bold tracking-tight text-2xl">Create an account</h3>
          <p className="text-sm text-gray-500">Enter your details to get started.</p>
          <div className="pt-12 pb-18 p-4 space-y-4">
            <div className="grid gap-2 text-start">
              <label className="text-sm font-normal leading-none" htmlFor="name">
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="grid gap-2 text-start">
              <label className="text-sm font-normal leading-none" htmlFor="email">
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="grid gap-2 text-start">
              <label className="text-sm font-normal leading-none" htmlFor="city">
                City
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="grid gap-2 text-start">
              <label className="text-sm font-normal leading-none" htmlFor="password">
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter a secure password"
                required
                type="password"
              />
            </div>
          </div>
          <div className="p-6 flex items-center justify-between">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-indigo-900 h-10 px-4 py-2 w-full"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500 mb-5">
          Already have an account? <Link className="underline" to="/signin">Sign in</Link>
        </div>
      </div>
    </div>
  );
};
