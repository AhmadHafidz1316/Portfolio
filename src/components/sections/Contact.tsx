import React, { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Database, Eye, Trash2, Mail, Phone, MapPin, Inbox, Check } from "lucide-react";
import { ContactMessage } from "../../types";
import { personalInfo } from "../../data/portfolioData";
import SplitText from "../animations/SplitText";
import ShinyText from "../animations/ShinyText";
import Magnet from "../animations/Magnet";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Load existing messages from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_messages");
      if (stored) {
        setMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load messages:", e);
    }
  }, []);

  // Save messages to state & localStorage
  const saveMessages = (updated: ContactMessage[]) => {
    setMessages(updated);
    localStorage.setItem("portfolio_messages", JSON.stringify(updated));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorText("All fields are required.");
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorText("Invalid email address format.");
      setStatus("error");
      return;
    }

    // Simulate submission latency
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: "msg_" + Date.now(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        read: false,
      };

      const updated = [newMessage, ...messages];
      saveMessages(updated);

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus("success");

      // Auto clear success screen after 4 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1200);
  };

  const markAsRead = (id: string) => {
    const updated = messages.map((msg) =>
      msg.id === id ? { ...msg, read: true } : msg
    );
    saveMessages(updated);
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter((msg) => msg.id !== id);
    saveMessages(updated);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em] bg-[#0b0b0b] border border-[#1a1a1a] px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            <SplitText text="Start a Conversation" delay={0.1} />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Details Info Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 text-left">
            <div>
              <h3 className="font-serif font-light text-white text-xl sm:text-2xl mb-4 leading-snug">
                Let's build something exceptional together!
              </h3>
              <p className="text-neutral-400 font-sans font-light text-xs sm:text-sm leading-relaxed mb-8">
                I am always excited to collaborate on large-scale web systems, mobile applications, API integrations, or simply discussing modern tech stacks. Reach out via this form or my contact details.
              </p>
              
              {/* Cards details block */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#0a0a0a]/50 border border-[#1a1a1a] p-4 rounded-xl">
                  <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.25em] block mb-0.5">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm text-neutral-200 font-semibold hover:text-white transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#0a0a0a]/50 border border-[#1a1a1a] p-4 rounded-xl">
                  <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.25em] block mb-0.5">WhatsApp / Phone</span>
                    <span className="text-xs sm:text-sm text-neutral-200 font-semibold">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#0a0a0a]/50 border border-[#1a1a1a] p-4 rounded-xl">
                  <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.25em] block mb-0.5">Location</span>
                    <span className="text-xs sm:text-sm text-neutral-200 font-semibold">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Demo Database status indicator card */}
            <div className="bg-[#0a0a0a]/50 border border-[#1a1a1a] p-5 rounded-xl flex flex-col justify-center">
              <div className="flex items-center justify-between w-full mb-3">
                <span className="font-mono text-[9px] text-neutral-400 flex items-center gap-1.5 font-bold uppercase tracking-[0.25em]">
                  <Database size={12} className="text-white" /> Demo Local Database
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              </div>
              <p className="text-[10px] text-neutral-500 leading-normal mb-4 font-sans font-light">
                Messages submitted are stored securely in your browser's local storage. Use the Admin Panel below to inspect the real-time record state.
              </p>
              <button
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="w-full bg-[#050505] border border-[#1a1a1a] hover:border-[#222] hover:bg-[#0d0d0d] transition-colors text-neutral-300 font-mono text-[10px] uppercase tracking-widest py-2.5 rounded-full flex items-center justify-center gap-2 cursor-pointer font-bold"
              >
                <Inbox size={12} />
                {showAdminPanel ? "Hide Admin Inbox" : "Open Admin Inbox"} ({messages.length})
              </button>
            </div>
          </div>

          {/* Form container */}
          <div className="lg:col-span-7 bg-[#0a0a0a]/40 border border-[#1a1a1a]/80 p-6 sm:p-8 rounded-xl relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center text-center"
                >
                  <div className="h-16 w-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white mb-6 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-serif font-light text-white text-xl sm:text-2xl mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-neutral-400 font-sans font-light text-xs sm:text-sm max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out! Your message has been successfully saved in the local database system.
                  </p>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                    Returning to form in a few seconds...
                  </span>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-5 text-left"
                >
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl flex items-start gap-3 text-rose-400 text-xs"
                    >
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{errorText}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-[#050505] border border-[#1a1a1a] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className="bg-[#050505] border border-[#1a1a1a] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration / General Inquiry"
                      className="bg-[#050505] border border-[#1a1a1a] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-mono text-[9px] text-neutral-400 uppercase tracking-[0.25em]">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Ahmad, I am interested in discussing..."
                      className="bg-[#050505] border border-[#1a1a1a] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white resize-none transition-colors"
                    />
                  </div>

                  {/* Submission triggers buttons */}
                  <div className="pt-2">
                    <Magnet range={60} strength={0.2}>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="flex items-center justify-center gap-2 bg-white hover:bg-[#e5e5e5] text-black font-bold px-8 py-4 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.15em] transition-all shadow-[0_4px_25px_rgba(255,255,255,0.1)] disabled:opacity-50 cursor-pointer w-full sm:w-auto"
                      >
                        {status === "submitting" ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message Now <Send size={12} />
                          </>
                        )}
                      </button>
                    </Magnet>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Dynamic Admin Inbox Messages Dashboard drawer */}
        <AnimatePresence>
          {showAdminPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-6xl mx-auto mt-12 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-6 sm:p-8 overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-[#151515] pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Inbox size={14} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif font-light text-white text-base">
                      Admin Console Inbox
                    </h4>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-[0.25em] block">
                      Local DB Browser (ReadOnly / Delete)
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowAdminPanel(false)}
                  className="text-xs text-neutral-500 hover:text-white transition-colors cursor-pointer"
                >
                  Hide
                </button>
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-12 flex flex-col items-center justify-center gap-2">
                  <Inbox size={32} className="text-neutral-700 animate-pulse" />
                  <p className="text-neutral-500 text-xs">No messages received yet. Submit a message above to test the local database.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`border p-4 rounded-xl text-left flex flex-col justify-between transition-colors ${
                        msg.read
                          ? "bg-[#050505]/40 border-[#1a1a1a]/50"
                          : "bg-[#050505] border-[#1a1a1a] shadow-md"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex flex-col">
                            <span className="font-serif font-medium text-white text-sm">
                              {msg.name}
                            </span>
                            <span className="font-mono text-[9px] text-neutral-500">
                              {msg.email}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] text-neutral-500 shrink-0">
                            {msg.timestamp}
                          </span>
                        </div>
                        <p className="font-serif font-medium text-white text-xs mb-1">
                          Subject: {msg.subject}
                        </p>
                        <p className="text-neutral-400 font-sans font-light text-xs leading-relaxed mb-4 whitespace-pre-wrap">
                          {msg.message}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 border-t border-[#151515] pt-3 mt-2">
                        {!msg.read && (
                          <button
                            onClick={() => markAsRead(msg.id)}
                            className="text-[10px] font-bold text-white hover:text-neutral-300 transition-colors flex items-center gap-1 cursor-pointer bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                          >
                            <Check size={12} /> Mark as Read
                          </button>
                        )}
                        {msg.read && (
                          <span className="text-[10px] font-mono text-neutral-500 flex items-center gap-1.5 px-1">
                            <CheckCircle2 size={12} className="text-neutral-500" /> Read
                          </span>
                        )}
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="ml-auto text-[10px] font-semibold text-neutral-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer bg-[#0b0b0b] border border-[#1a1a1a] px-2 py-1 rounded-lg"
                        >
                          <Trash2 size={12} /> Delete
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
