import { useState } from "react";
import { FiMail, FiMapPin, FiSend, FiPhone } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function ReachOutSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:krishjain.w@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-black text-white py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center">Reach Out to Me</h2>
        <p className="text-center text-zinc-400 max-w-xl mx-auto">
          I’m always open to discussing projects, collaborations, or just a good
          chat. Feel free to reach out via any platform below.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 text-zinc-300">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FiMail className="text-xl" />
              <span>
                <a href="mailto:krishjain.w@gmail.com">
                  krishjain.w@gmail.com{" "}
                </a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-xl" />
              <span>India (Remote)</span>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="text-xl" />
              <span>Contact: +91 8976040283</span>
            </div>
            <div className="flex items-center gap-4">
              <SiInstagram className="text-xl" />
              <span>
                <a
                  href="https://www.instagram.com/krishkracksup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  instagram.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <SiGithub className="text-xl" />
              <a
                href="https://github.com/KrishCodesw/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <SiLinkedin className="text-xl" />
              <a
                href="https://www.linkedin.com/in/krish-jain-445aa332a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com
              </a>
            </div>
          </div>

          {/* Working Contact Form */}
          <form className="space-y-4" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md placeholder:text-zinc-500 text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md placeholder:text-zinc-500 text-white"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md placeholder:text-zinc-500 text-white"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-zinc-300 transition"
            >
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
