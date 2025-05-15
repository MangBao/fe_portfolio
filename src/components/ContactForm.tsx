// components/ContactForm.tsx
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
    // Bạn có thể tích hợp emailjs hoặc backend API ở đây
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 lg:px-16 bg-[#1a1a1a] text-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#111] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#111] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#111] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <button
          type="submit"
          className="bg-cyan-400 text-black font-semibold py-2 px-6 rounded hover:bg-cyan-300 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
