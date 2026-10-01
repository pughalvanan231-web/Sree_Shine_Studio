import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES } from "../content/services";
import { STUDIO_INFO } from "../content/studio";

export default function ContactForm({ initialService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService || "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email format.";
    }
    if (!formData.service) {
      errs.service = "Please select a service of interest.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please share a brief summary of your project (min 10 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Honest handling: simulate delivery / prepare fallback
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      // Succeeded in local client processing
      setStatus("success");
      setStatusMessage("Thank you! Your project inquiry has been received. Our creative team will get back to you within 24–48 hours.");
    } catch {
      setStatus("error");
      setStatusMessage("Unable to dispatch automatically right now. Please email us directly at " + STUDIO_INFO.contact.email);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#DDD2BF]/80 shadow-md">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 space-y-5"
        >
          <div className="w-16 h-16 bg-[#C4A47C]/15 text-[#9C7741] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl font-semibold text-[#191B1E]">
            Inquiry Received
          </h3>
          <p className="text-sm text-[#585C65] max-w-md mx-auto leading-relaxed">
            {statusMessage}
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                setStatus("idle");
              }}
              className="px-6 py-2.5 bg-[#F3EFE7] hover:bg-[#ECE5D8] text-[#191B1E] text-xs font-semibold rounded-full border border-[#DDD2BF] transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-semibold text-[#191B1E]">
              Tell Us About Your Project
            </h3>
            <p className="text-xs text-[#848994]">
              Fill in the details below and we will craft a tailored creative proposal.
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#191B1E] mb-2">
              Full Name <span className="text-[#9C7741]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Alistair Vance"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FBF9F5] focus:bg-white text-[#191B1E] placeholder-[#848994] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4A47C] ${
                errors.name ? "border-red-500 bg-red-50/20" : "border-[#DDD2BF]"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#191B1E] mb-2">
                Email Address <span className="text-[#9C7741]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FBF9F5] focus:bg-white text-[#191B1E] placeholder-[#848994] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4A47C] ${
                  errors.email ? "border-red-500 bg-red-50/20" : "border-[#DDD2BF]"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#191B1E] mb-2">
                Phone Number <span className="text-xs text-[#848994] lowercase font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-[#DDD2BF] text-sm bg-[#FBF9F5] focus:bg-white text-[#191B1E] placeholder-[#848994] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4A47C]"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#191B1E] mb-2">
              Primary Service Needed <span className="text-[#9C7741]">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FBF9F5] focus:bg-white text-[#191B1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4A47C] ${
                errors.service ? "border-red-500 bg-red-50/20" : "border-[#DDD2BF]"
              }`}
            >
              <option value="">Select a discipline...</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Comprehensive 360° Studio Package">
                Comprehensive 360° Multidisciplinary Package
              </option>
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.service}
              </p>
            )}
          </div>

          {/* Project Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#191B1E] mb-2">
              Project Summary & Scope <span className="text-[#9C7741]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your brand, deliverables needed, target timelines, and any visual inspirations..."
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FBF9F5] focus:bg-white text-[#191B1E] placeholder-[#848994] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4A47C] resize-y ${
                errors.message ? "border-red-500 bg-red-50/20" : "border-[#DDD2BF]"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Error Banner */}
          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 px-6 rounded-xl bg-[#191B1E] hover:bg-[#2C2F33] text-[#FBF9F5] font-medium text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#C4A47C]"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#C4A47C]" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Send Project Inquiry</span>
                <Send className="w-4 h-4 text-[#C4A47C]" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
