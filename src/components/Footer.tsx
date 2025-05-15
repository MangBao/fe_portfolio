import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12 text-center">
      <div className="max-w-5xl mx-auto">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2">
          Designed and built by <strong>Your Name</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
