"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

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
    if (name === "email" || name === "message") {
      setErrors((prev) => ({ ...prev, [name]: !value }));
    }
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
      // Gửi form nếu cần (giả sử không có backend)
    }
  };

  return (
    <section className="section" id="contact">
      <div className="title">
        <span className="text-primary-02 uppercase">Get in touch</span>
        <h2 className="text-title-sm md:text-title-lg tracking-title">
          {["C", "O", "N", "T", "A", "C", "T"].map((char, index) => (
            <span key={index} className="bounce inline-block">
              {char}
            </span>
          ))}
        </h2>
      </div>
      <div className="contact-content max-w-2xl mx-auto">
        <form className="form-container space-y-6" onSubmit={handleSubmit}>
          <div className="headline text-center text-xl text-white">
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
              className="type-animation-contact"
            />
          </div>
          <div className="form-line relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:border-primary-02"
              placeholder=" "
            />
            <label
              className={`absolute left-3 transition-all duration-300 text-gray-400 ${formData.name ? "top-[-1.25rem] text-sm" : "top-3"
                }`}
            >
              Name
            </label>
            <div className="check-label hidden"></div>
          </div>
          <div className="form-line relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:border-primary-02"
              placeholder=" "
              required
            />
            <label
              className={`absolute left-3 transition-all duration-300 text-gray-400 ${formData.email ? "top-[-1.25rem] text-sm" : "top-3"
                }`}
            >
              Your email *
            </label>
            <div
              className={`error-label text-red-500 text-sm mt-1 ${errors.email ? "block" : "hidden"
                }`}
            >
              Field is required!
            </div>
            <div className="check-label hidden"></div>
          </div>
          <div className="form-line relative">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:border-primary-02"
              placeholder=" "
            />
            <label
              className={`absolute left-3 transition-all duration-300 text-gray-400 ${formData.subject ? "top-[-1.25rem] text-sm" : "top-3"
                }`}
            >
              Subject
            </label>
            <div className="check-label hidden"></div>
          </div>
          <div className="form-line relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:border-primary-02 h-32 resize-none"
              placeholder=" "
              required
            />
            <label
              className={`absolute left-3 transition-all duration-300 text-gray-400 ${formData.message ? "top-[-1.25rem] text-sm" : "top-3"
                }`}
            >
              Message *
            </label>
            <div
              className={`error-label text-red-500 text-sm mt-1 ${errors.message ? "block" : "hidden"
                }`}
            >
              Field is required!
            </div>
            <div className="check-label hidden"></div>
          </div>
          <input
            type="button"
            className="form-button w-full p-3 bg-primary-02 text-white rounded-md hover:bg-primary-04 transition-colors cursor-pointer"
            value="Submit"
            onClick={handleSubmit}
          />
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