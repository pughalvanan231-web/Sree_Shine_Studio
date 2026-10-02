import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ArrowUpRight
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

      {/* Breadcrumbs */}
      <div className="pt-24 sm:pt-28 pb-4 bg-[#0a0a0a] border-b border-white/10">
        <div className="site-container">
          <div className="flex items-center gap-2 text-xs text-[#6B7280]">
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
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                Overview & Approach
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ECE5D8] leading-tight">
                Crafting Visual Significance for {service.shortTitle}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed">
                {service.summary}
              </p>

              <div className="pt-2">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A25D] hover:bg-[#DFB873] text-black text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-md transition-all duration-200 active:scale-95"
                >
                  <span>Book {service.shortTitle} Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg aspect-[16/10] bg-[#121212]">
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

      {/* Deliverables Scope */}
      <section className="py-16 sm:py-20 bg-[#0d0d0d] border-y border-white/10">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
                Deliverables
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
                What You Receive
              </h2>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Production-ready deliverables built with uncompromising attention to craft and technical fidelity.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whatYouReceive.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#121212] border border-white/10 shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C8A25D] shrink-0 mt-0.5" />
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
        <section className="py-16 sm:py-24 bg-[#0a0a0a]">
          <div className="site-container">
            <div className="flex items-end justify-between mb-8 sm:mb-12">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-1">
                  Selected Work
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
                  Relevant Case Studies
                </h2>
              </div>
              <Link
                to="/work"
                className="text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] hover:text-[#C8A25D] inline-flex items-center gap-1 transition-colors"
              >
                <span>All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8A25D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {relevantProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Contact Section */}
      <ContactInvitation />
    </>
  );
}

