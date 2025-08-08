import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //test rubah

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus("submitting");

    // Simulate form submission - replace with your actual API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset form status after showing success message
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 w-full bg-zinc-900/30 rounded-3xl mx-auto max-w-[95%] my-12 shadow-xl overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6 font-sora">
          <span className="bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-12 font-inter">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-5">
            <div className="bg-zinc-800/80 rounded-xl p-6 shadow-lg h-full">
              <h3 className="text-xl font-sora font-semibold text-white mb-6 flex items-center">
                <span className="w-6 h-6 rounded-md bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                Contact Info
              </h3>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4CA9FF]"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 font-inter mb-1">
                      Mail me at
                    </p>
                    <a
                      href="mailto:ghufranbakrie@gmail.com"
                      className="text-neutral-200 font-inter hover:text-[#4CA9FF] transition-colors"
                    >
                      ghufranbakrie@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#3BF686]"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 font-inter mb-1">
                      Based in
                    </p>
                    <p className="text-neutral-200 font-inter">
                      Aceh, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4CA9FF]"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 font-inter mb-1">
                      Working hours
                    </p>
                    <p className="text-neutral-200 font-inter">
                      Mon - Fri: 9:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h4 className="text-lg font-sora font-medium text-white mb-4">
                  Find me on
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/ghufranb_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#3BF686] hover:to-[#4CA9FF] transition-all duration-300"
                  >
                    <img
                      src="/icons/instgram.svg"
                      alt="Instagram"
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammadghufran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#3BF686] hover:to-[#4CA9FF] transition-all duration-300"
                  >
                    <img
                      src="/icons/linkedin.svg"
                      alt="LinkedIn"
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#3BF686] hover:to-[#4CA9FF] transition-all duration-300"
                  >
                    <img
                      src="/icons/github.svg"
                      alt="GitHub"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <div className="bg-zinc-800/80 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-sora font-semibold text-white mb-6 flex items-center">
                <span className="w-6 h-6 rounded-md bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </span>
                Send a Message
              </h3>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-inter text-neutral-400 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-700/50 border border-zinc-700 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#4CA9FF]/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-inter text-neutral-400 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-700/50 border border-zinc-700 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#4CA9FF]/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-inter text-neutral-400 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-700/50 border border-zinc-700 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#4CA9FF]/50"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-inter text-neutral-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-zinc-700/50 border border-zinc-700 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:ring-2 focus:ring-[#4CA9FF]/50 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={`w-full py-3 px-6 text-white font-inter font-medium rounded-lg transition-all duration-300 relative overflow-hidden ${
                      formStatus === "submitting"
                        ? "bg-zinc-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:shadow-[0_0_20px_rgba(76,169,255,0.4)]"
                    }`}
                  >
                    <span
                      className={
                        formStatus === "submitting"
                          ? "opacity-0"
                          : "opacity-100"
                      }
                    >
                      Send Message
                    </span>

                    {formStatus === "submitting" && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </motion.div>
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {formStatus === "success" && (
                  <motion.div
                    className="bg-green-800/30 border border-green-800 rounded-lg p-3 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-green-400 font-inter text-sm flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Your message was sent successfully!
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {formStatus === "error" && (
                  <motion.div
                    className="bg-red-800/30 border border-red-800 rounded-lg p-3 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-red-400 font-inter text-sm flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      Sorry, something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
