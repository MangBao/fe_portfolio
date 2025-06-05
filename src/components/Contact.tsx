"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import InputField from "./InputField";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      email: !formData.email,
      message: !formData.message,
    };
    setErrors(newErrors);
    if (!newErrors.email && !newErrors.message) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section>
      <div className="title">
        <span className="text-primary-02 uppercase">Get in touch</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title flex gap-2">
          {["C", "O", "N", "T", "A", "C", "T"].map((char, index) => (
            <span key={index} className="bounce">
              {char}
            </span>
          ))}
        </h2>
      </div>
      <div className="contact-content max-w-2xl mx-auto">
        <form
          className="form-container space-y-6 relative shadow-[0_0_15px_0_rgba(0,0,0,0.1)] px-8 py-6"
          onSubmit={handleSubmit}
        >
          <div className="text-center text-primary_02 mb-10 uppercase font-bold text-sm tracking-widest">
            <TypeAnimation
              sequence={[
                "Let's get in touch!",
                2000,
                "Send me a message!",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="relative z-[2]"
            />
          </div>

          <div className="space-y-7">
            {/* Name Field */}
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            {/* Email Field */}
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm ml-2">
                Email không được để trống.
              </p>
            )}

            {/* Subject Field */}
            <InputField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            {/* Message Field */}
            <div className="form-line relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
                className="form-input w-full p-3 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:border-primary-02 min-h-[100px]"
              />
              <label
                className={`absolute left-3 transition-all duration-300 text-gray-400 ${
                  formData.message ? "top-[-1.25rem] text-sm text-primary_02" : "top-3"
                }`}
              >
                Message
              </label>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 ml-2">
                  Message không được để trống.
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
                px-[60px] py-5
                font-bold text-black uppercase text-center
                rounded-[3px]
                bg-[#8cf1d0]
                transition-all duration-300 ease-in-out
                tracking-[2px]
                hover:bg-[#78e6c2]
                hover:shadow-[0_10px_25px_rgba(72,72,72,0.1)]
            "
          >
            Submit
          </button>
        </form>
      </div>
      <style>
        {`
          .bounce {
            transition: all 0.3s ease-out;
          }
          .bounce:hover {
            display: inline-block;
            animation: rubberband 0.8s ease-out;
          }
          @keyframes rubberband {
            0% { transform: scaleX(1); }
            40% { transform: scaleX(1.12) scaleY(0.75); }
            55% { transform: scaleX(0.85) scaleY(1); }
            65% { transform: scaleX(1.09) scaleY(0.85); }
            75% { transform: scaleX(0.9) scaleY(1); }
            90% { transform: scaleX(1.05) scaleY(0.95); }
            to { transform: scaleX(1) scaleY(1); }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
