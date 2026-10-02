import { useState } from "react";
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
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email format.";
    }
    if (!formData.service) {
      errs.service = "Please select a discipline.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please share a brief summary of your project.";
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setStatusMessage("Thank you. Your inquiry has been received. Our team will get back to you within 24 hours.");
    } catch {
      setStatus("error");
      setStatusMessage("Unable to send inquiry. Please email us directly at " + STUDIO_INFO.contact.email);
    }
  };

  return (
    <div className="bg-[#121212] p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 shadow-sm">
      {status === "success" ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-14 h-14 bg-[#C8A25D]/15 text-[#C8A25D] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-heading text-2xl font-semibold text-[#ECE5D8]">
            Inquiry Received
          </h3>
          <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
            {statusMessage}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                setStatus("idle");
              }}
              className="px-6 py-2.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black text-xs font-semibold rounded-full transition-all"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#ECE5D8]">
              Project Details
            </h3>
            <p className="text-xs text-[#9CA3AF]">
              Tell us about your brand goals and timeline.
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] mb-1.5">
              Full Name <span className="text-[#C8A25D]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Alistair Vance"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-black text-[#ECE5D8] placeholder-[#6B7280] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8A25D] ${
                errors.name ? "border-red-500" : "border-white/10"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] mb-1.5">
                Email Address <span className="text-[#C8A25D]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-black text-[#ECE5D8] placeholder-[#6B7280] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8A25D] ${
                  errors.email ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] mb-1.5">
                Phone <span className="text-xs text-[#6B7280] lowercase font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-white/10 text-sm bg-black text-[#ECE5D8] placeholder-[#6B7280] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8A25D]"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] mb-1.5">
              Discipline Needed <span className="text-[#C8A25D]">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-black text-[#ECE5D8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8A25D] ${
                errors.service ? "border-red-500" : "border-white/10"
              }`}
            >
              <option value="">Select a discipline...</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Comprehensive Studio Package">
                Comprehensive Multidisciplinary Package
              </option>
            </select>
            {errors.service && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.service}
              </p>
            )}
          </div>

          {/* Project Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] mb-1.5">
              Project Summary <span className="text-[#C8A25D]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your brand, deliverables needed, and timeline..."
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-black text-[#ECE5D8] placeholder-[#6B7280] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8A25D] resize-y ${
                errors.message ? "border-red-500" : "border-white/10"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Error Banner */}
          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 px-6 rounded-full bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] disabled:opacity-70 focus:outline-none"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Send className="w-4 h-4 text-black" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

