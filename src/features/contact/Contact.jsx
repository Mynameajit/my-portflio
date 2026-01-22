import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Facebook,
  Send,
  Clock,
} from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
} from "./emailConfig";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        formRef.current,
        EMAIL_PUBLIC_KEY,
      );
      toast.success("Message sent successfully ✅");
      formRef.current.reset();
    } catch (error) {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 lg:px-24 py-24
      bg-white dark:bg-black transition-colors"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          Get In <span className="text-pink-500">Touch</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Feel free to contact me for freelancing, collaboration, or any
          project-related query. I’ll get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-white dark:bg-white/5
            backdrop-blur-xl
            border border-black/10 dark:border-white/10
            rounded-3xl p-8 space-y-8
            text-black dark:text-white
            shadow-lg dark:shadow-none
            hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]
            transition-all
          "
        >
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Contact <span className="text-pink-500">Information</span>
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              You can reach me anytime through email, phone, or social
              platforms. I am open to freelance work, internships, and
              collaboration.
            </p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500">
              <Mail />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium text-gray-800 dark:text-gray-300">
                ajitjumar96411@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500">
              <Phone />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="font-medium text-gray-800 dark:text-gray-300">
                +91 8825133961
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500">
              <Clock />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Availability
              </p>
              <p className="font-medium text-gray-800 dark:text-gray-300">
                Open for Freelance & Internship
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-black/10 dark:bg-white/10" />

          {/* Social Links */}
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Connect with me
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Github />, link: "https://github.com/mynameajit" },
                {
                  icon: <Linkedin />,
                  link: "https://www.linkedin.com/in/developer-ajit-2025ak/",
                },
                {
                  icon: <Facebook />,
                  link: "https://www.facebook.com/profile.php?id=100041603052540",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="
                    p-3 rounded-xl
                    bg-white/10 dark:bg-white/5
                    text-gray-700 dark:text-gray-300
                    hover:text-pink-500
                    transition
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-white dark:bg-white/5
            backdrop-blur-xl
            border border-black/10 dark:border-white/10
            rounded-3xl p-8 space-y-6
            text-black dark:text-white
            shadow-lg dark:shadow-none
            hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]
            transition-all
          "
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Send a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              w-full bg-gray-100 dark:bg-black/40
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              border border-black/10 dark:border-white/10
              rounded-xl px-4 py-3
              focus:outline-none focus:border-pink-500
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              w-full bg-gray-100 dark:bg-black/40
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              border border-black/10 dark:border-white/10
              rounded-xl px-4 py-3
              focus:outline-none focus:border-pink-500
            "
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="
              w-full bg-gray-100 dark:bg-black/40
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              border border-black/10 dark:border-white/10
              rounded-xl px-4 py-3 resize-none
              focus:outline-none focus:border-pink-500
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              flex items-center gap-2 justify-center
              w-full py-3 rounded-xl
              bg-linear-to-r from-pink-500 to-red-500
              text-white
              hover:opacity-90
              disabled:opacity-60
              transition
            "
          >
            {loading ? <Spinner className="h-5 w-5" /> : <Send size={18} />}
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
