import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div
      className="bg-cover bg-center py-24 lg:py-32"
      style={{
        backgroundImage:
          "url('/img/img1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contact Us Content */}
      <div className="container mx-auto text-center relative z-10 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8">
          Let's Bring Your Vision to Life
        </h2>
        <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
          We specialize in creating inspiring and functional spaces tailored to your
          unique style. Have a project in mind? Contact us today.
        </p>

        {/* Contact Form */}
        <div className="bg-white max-w-3xl mx-auto p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-lg text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-lg text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                rows="6"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 disabled:opacity-50`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12">
          <h3 className="text-2xl text-white font-semibold mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-8 text-white text-3xl">
            <a
              href="https://www.instagram.com/timelessinteriors001?igsh=eXVwbXJubHNsYnNr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1BJ1pkozUh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/2348078092964"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-white">
          <h3 className="text-lg font-semibold">Our Location</h3>
          <p className="text-md">123 Design Ave, Suite 101, City, State, ZIP</p>
          <h3 className="mt-6 text-lg font-semibold">Phone</h3>
          <p className="text-md">(123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
