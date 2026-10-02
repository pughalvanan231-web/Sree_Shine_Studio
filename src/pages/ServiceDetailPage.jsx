import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ArrowUpRight,
  Layers,
  ChevronRight
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import ContactInvitation from "../components/ContactInvitation";
import SeoMeta from "../components/SeoMeta";
import { SERVICES } from "../content/services";
import { PROJECTS } from "../content/projects";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find relevant projects for this service
  const relevantProjects = PROJECTS.filter(
    (p) => p.categorySlug === service.id || p.category.toLowerCase().includes(service.shortTitle.toLowerCase())
  );

  return (
    <>
      <SeoMeta
        title={`${service.title}`}
        description={`${service.summary} Delivered by Sree Shine Studio.`}
      />

      {/* Breadcrumb & Header */}
      <div className="pt-24 sm:pt-28 pb-4 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#848994] overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <Link to="/home" className="hover:text-[#ECE5D8] transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link to="/services" className="hover:text-[#ECE5D8] transition-colors shrink-0">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[#ECE5D8] font-medium shrink-0">{service.shortTitle}</span>
          </div>
        </div>
      </div>

      <PageHeader
        badge="Specialized Discipline"
        title={service.title}
        subtitle={service.tagline}
      />

      {/* Service Overview & Hero Media */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
                Overview & Approach
              </span>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-semibold text-[#ECE5D8] leading-snug">
                Crafting Visual Significance for {service.shortTitle}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed">
                {service.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black text-xs sm:text-sm font-semibold rounded-full shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Book {service.shortTitle} Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[16/10] bg-[#121212]">
                <img
                  src={service.heroImage || service.coverImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What You Receive (Deliverables Checklist) */}
      <section className="py-16 sm:py-20 bg-[#0c0c0c] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            
            <div className="lg:col-span-4 space-y-2 sm:space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
                Deliverables & Scope
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
                What You Receive
              </h2>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Concrete, production-ready deliverables built with uncompromising attention to craft and technical fidelity.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {service.whatYouReceive.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#121212] border border-white/10 shadow-sm flex items-start gap-3 sm:gap-3.5"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A25D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#ECE5D8] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Relevant Work */}
      {relevantProjects.length > 0 && (
        <section className="py-16 sm:py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8 sm:mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold block mb-1">
                  Selected Demonstrations
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
                  Relevant Case Studies
                </h2>
              </div>
              <Link
                to="/work"
                className="text-xs font-semibold text-[#ECE5D8] hover:text-[#C8A25D] inline-flex items-center gap-1 transition-colors"
              >
                <span>All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {relevantProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#0c0c0c] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
                Questions Answered
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-black border border-white/10 shadow-sm"
                >
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-[#ECE5D8] mb-1.5 sm:mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C8A25D] shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pre-selected Contact CTA */}
      <section className="py-16 sm:py-20 bg-[#071D26] text-[#ECE5D8] text-center border-t border-[#0E5E8A]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
          <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-medium text-white">
            Ready to Begin Your <span className="text-[#C8A25D]">{service.shortTitle}</span> Project?
          </h2>
          <p className="text-xs sm:text-sm text-[#C1C4CC] max-w-xl mx-auto">
            Tell us about your requirements and we will prepare a dedicated proposal.
          </p>
          <div className="pt-2">
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 bg-[#C8A25D] hover:bg-[#DFB873] text-black font-semibold text-xs sm:text-sm rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span>Initiate {service.shortTitle} Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
