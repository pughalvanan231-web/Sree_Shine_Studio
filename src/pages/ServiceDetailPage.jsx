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
      <div className="pt-28 pb-4 bg-black border-b border-white/10/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#848994]">
            <Link to="/home" className="hover:text-[#ECE5D8] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-[#ECE5D8] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#ECE5D8] font-medium">{service.shortTitle}</span>
          </div>
        </div>
      </div>

      <PageHeader
        badge="Specialized Discipline"
        title={service.title}
        subtitle={service.tagline}
      />

      {/* Service Overview & Hero Media */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
                Overview & Approach
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#ECE5D8] leading-snug">
                Crafting Visual Significance for {service.shortTitle}
              </h2>
              <p className="text-base text-[#9CA3AF] leading-relaxed">
                {service.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#191B1E] hover:bg-[#2C2F33] text-[#FBF9F5] text-sm font-medium rounded-full shadow-md transition-colors"
                >
                  <span>Book {service.shortTitle} Project</span>
                  <ArrowRight className="w-4 h-4 text-[#C4A47C]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[16/10] bg-[#ECE5D8]">
                <img
                  src={service.heroImage || service.coverImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What You Receive (Deliverables Checklist) */}
      <section className="py-20 bg-[#121212] border-y border-white/10/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
                Deliverables & Scope
              </span>
              <h2 className="font-heading text-3xl font-semibold text-[#ECE5D8]">
                What You Receive
              </h2>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Concrete, production-ready deliverables built with uncompromising attention to craft and technical fidelity.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whatYouReceive.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#121212] border border-white/10 shadow-sm flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#ECE5D8] font-medium leading-relaxed">
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
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold block mb-1">
                  Selected Demonstrations
                </span>
                <h2 className="font-heading text-3xl font-semibold text-[#ECE5D8]">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relevantProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-[#121212] border-t border-white/10/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C8A25D] font-semibold">
                Questions Answered
              </span>
              <h2 className="font-heading text-3xl font-semibold text-[#ECE5D8]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-black border border-white/10 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-semibold text-[#ECE5D8] mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C4A47C] shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pre-selected Contact CTA */}
      <section className="py-16 bg-[#121315] text-[#FBF9F5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#FBF9F5]">
            Ready to Begin Your <span className="text-[#C4A47C]">{service.shortTitle}</span> Project?
          </h2>
          <p className="text-sm text-[#C1C4CC]">
            Tell us about your requirements and we will prepare a dedicated proposal.
          </p>
          <div className="pt-2">
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C4A47C] hover:bg-[#B8925A] text-[#121315] font-semibold text-sm rounded-full shadow-lg transition-all"
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
