import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    captcha: "",
  });

  const generateCaptcha = () => {
    const captchaChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += captchaChars.charAt(
        Math.floor(Math.random() * captchaChars.length)
      );
    }
    return captcha;
  };

  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.captcha === captchaValue) {
      alert("Form submitted");
    } else {
      alert("Invalid captcha. Please try again.");
      setCaptchaValue(generateCaptcha());
    }
  };

  const handleRefresh = (event) => {
    event.preventDefault();
    setCaptchaValue(generateCaptcha());
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label
          className="block mb-2 font-bold text-gray-700"
          htmlFor="firstName"
        >
          First Name:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 font-bold text-gray-700"
          htmlFor="lastName"
        >
          Last Name:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 font-bold text-gray-700"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 font-bold text-gray-700"
          htmlFor="confirmPassword"
        >
          Confirm Password:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="captcha">
          Please enter the captcha:
        </label>
        <div className="flex">
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-l-none shadow appearance-none focus:outline-none focus:shadow-outline"
            id="captcha"
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleChange}
          />
          <div className="px-3 py-2 bg-gray-200 border border-l-0 rounded-r shadow appearance-none focus:outline-none focus:shadow-outline">
            {captchaValue}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>

        <button
          onClick={handleRefresh}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Refresh Captcha
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
