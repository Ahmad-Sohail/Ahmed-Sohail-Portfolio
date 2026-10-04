import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const myEmail = "ahmedsohail99122@gmail.com";
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      // Modern clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(myEmail);
      } else {
        // Fallback method
        const textArea = document.createElement("textarea");
        textArea.value = myEmail;

        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand("copy");

        document.body.removeChild(textArea);
      }

      setCopiedEmail(true);

      setTimeout(() => {
        setCopiedEmail(false);
      }, 2200);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const mailtoUrl = `mailto:${myEmail}?subject=${encodeURIComponent(
    formData.name
      ? `Portfolio Contact from ${formData.name}`
      : "Portfolio Inquiry for Ahmed Sohail",
  )}&body=${encodeURIComponent(
    formData.message
      ? `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      : `Hi Ahmed,\n\nI visited your portfolio and would like to connect with you.`,
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage(
        "Please fill out all fields before sending your message.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(myEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            _subject: `New Portfolio Inquiry from ${formData.name.trim()}`,
            _template: "table",
          }),
        },
      );

      const result = await response.json();

      if (
        response.ok &&
        (result.success === "true" || result.success === true || result.message)
      ) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      console.warn("Real mail relay warning:", err);
      // Fallback: If network issue occurs, guide user with mailto action
      setStatus("fallback");
      setErrorMessage(
        'Direct web dispatch encountered a connection issue. You can click "Open in Email App" below to send it directly via Gmail or your mail client!',
      );
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative section-fluid-spacing border-t border-white/[0.04] overflow-hidden w-full max-w-full"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-[#4F8CFF]/10 via-[#8B5CF6]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="fluid-container">
        {/* Custom CSS Grid Layout for Contact Section */}
        <div className="custom-grid-contact">
          {/* Left Block: Headline, Supporting Info & Semantic Address Links with ScrollReveal */}
          <ScrollReveal
            direction="up"
            distance={20}
            className="flex flex-col justify-between space-y-8 min-w-0"
          >
            <div className="space-y-4">
              <header className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">
                    GET IN TOUCH
                  </span>
                  <div
                    className="h-px w-8 bg-[#4F8CFF]/40"
                    aria-hidden="true"
                  />
                </div>

                <h2
                  id="contact-title"
                  className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight"
                >
                  Let's Build Something Great.
                </h2>
              </header>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you have an upcoming full-stack project, an open
                software engineering role, or simply want to connect, my inbox
                is always open.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="pt-4">
                <div className="p-4 rounded-2xl bg-[#0F1523] border border-white/[0.08] hover:border-[#4F8CFF]/40 transition-all duration-200">
                  <div className="text-xs font-semibold text-slate-400 mb-1.5">
                    Direct Email Address
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${myEmail}`}
                      className="text-sm sm:text-base font-medium text-white hover:text-[#4F8CFF] transition-colors truncate"
                    >
                      {myEmail}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Semantic Address Landmark for Social & Professional Links */}
            <address className="not-italic space-y-3 pt-4 border-t border-white/[0.06]">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect Across Networks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Email Link */}
                <a
                  href={`mailto:${myEmail}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0F1523] border border-white/[0.06] hover:border-[#4F8CFF]/40 hover:bg-[#151D30] transition-all text-slate-300 hover:text-white group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <Mail className="w-4 h-4 text-[#4F8CFF]" />
                    <span>Email</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Ahmad-Sohail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0F1523] border border-white/[0.06] hover:border-white/30 hover:bg-[#151D30] transition-all text-slate-300 hover:text-white group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ahmad-sohail-281228347/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0F1523] border border-white/[0.06] hover:border-[#4F8CFF]/40 hover:bg-[#151D30] transition-all text-slate-300 hover:text-white group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <Linkedin className="w-4 h-4 text-[#4F8CFF]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </address>
          </ScrollReveal>

          {/* Right Block: Semantic Form with ScrollReveal */}
          <ScrollReveal
            direction="up"
            distance={20}
            delay={0.15}
            className="min-w-0"
          >
            <div className="rounded-2xl bg-[#0F1523] border border-white/[0.08] p-6 sm:p-8 md:p-10 shadow-2xl relative">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/[0.06]">
                <MessageSquare className="w-5 h-5 text-[#4F8CFF]" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              {/* Status Message Notification with Framer Motion AnimatePresence */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    role="status"
                    className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div className="space-y-1">
                      <div className="font-semibold text-emerald-300">
                        Message sent successfully!
                      </div>
                      <p className="text-xs text-emerald-400/90 leading-relaxed">
                        Your message has been delivered to{" "}
                        <strong>{myEmail}</strong>.
                      </p>
                      <p className="text-[11px] text-slate-400 italic pt-1">
                        Note: If this was the first test submission, FormSubmit
                        sends a 1-time activation link to your inbox/spam folder
                        to verify receipt.
                      </p>
                    </div>
                  </motion.div>
                )}

                {(status === "error" || status === "fallback") && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    role="alert"
                    className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm space-y-2"
                  >
                    <div>
                      {errorMessage ||
                        "Please fill out all fields before sending your message."}
                    </div>
                    {status === "fallback" && (
                      <div className="pt-1">
                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send via Email App</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit}
                aria-label="Contact form for Ahmed Sohail"
              >
                <fieldset className="border-0 p-0 m-0 space-y-5">
                  <legend className="sr-only">
                    Send Ahmed a direct message
                  </legend>

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#090D17] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] transition-all outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#090D17] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] transition-all outline-none"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project, timeline, or open role..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090D17] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Form Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] hover:from-[#3f7de8] hover:to-[#7c4ee6] rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                            aria-hidden="true"
                          />
                          <span>Sending to Inbox...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 opacity-80" />
                        </>
                      )}
                    </motion.button>

                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-all"
                      title="Open message directly in your email client (Gmail / Outlook / Apple Mail)"
                    >
                      <Mail className="w-4 h-4 text-[#4F8CFF]" />
                      <span>Open in Email App</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </fieldset>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
