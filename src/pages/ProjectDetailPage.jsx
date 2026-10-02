import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Maximize2,
} from "lucide-react";
import LightboxModal from "../components/LightboxModal";
import ProjectCard from "../components/ProjectCard";
import ContactInvitation from "../components/ContactInvitation";
import SeoMeta from "../components/SeoMeta";
import { PROJECTS } from "../content/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <SeoMeta
        title={`${project.title} - ${project.category}`}
        description={`${project.shortDescription} by Sree Shine Studio.`}
      />

      {/* Breadcrumbs */}
      <div className="pt-24 sm:pt-28 pb-4 bg-[#0a0a0a] border-b border-white/10">
        <div className="site-container">
          <div className="flex items-center gap-2 text-xs text-[#6B7280]">
            <Link to="/home" className="hover:text-[#ECE5D8] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/work" className="hover:text-[#ECE5D8] transition-colors">Work</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#ECE5D8] font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-10 sm:pt-14 pb-12 sm:pb-16 bg-[#0a0a0a]">
        <div className="site-container space-y-6">
          
          <div className="space-y-3 max-w-3xl">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block">
              {project.category}
            </span>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-semibold text-[#ECE5D8] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#9CA3AF] leading-relaxed">
              {project.tagline || project.shortDescription}
            </p>
          </div>

          {/* Project Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-white/10 text-xs">
            <div>
              <span className="text-[#6B7280] uppercase tracking-wider block mb-1">Client</span>
              <span className="font-semibold text-[#ECE5D8]">{project.client}</span>
            </div>
            <div>
              <span className="text-[#6B7280] uppercase tracking-wider block mb-1">Discipline</span>
              <span className="font-semibold text-[#ECE5D8]">{project.category}</span>
            </div>
            <div>
              <span className="text-[#6B7280] uppercase tracking-wider block mb-1">Year</span>
              <span className="font-semibold text-[#ECE5D8]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#6B7280] uppercase tracking-wider block mb-1">Role</span>
              <span className="font-semibold text-[#ECE5D8]">Creative Direction</span>
            </div>
          </div>

          {/* Main Hero Showcase Media */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg aspect-[16/10] bg-[#121212]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

        </div>
      </section>

      {/* Brief & Deliverables Narrative */}
      <section className="py-16 sm:py-24 bg-[#0d0d0d] border-y border-white/10">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* The Brief & Approach */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-2">
                  Context & Objective
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#ECE5D8] mb-3">
                  The Brief
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed">
                  {project.brief}
                </p>
              </div>

              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-2">
                  Creative Direction
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#ECE5D8] mb-3">
                  Method & Execution
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#ECE5D8]">
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {project.deliverables?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#ECE5D8]">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A25D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    to={`/contact?service=${encodeURIComponent(project.category)}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#C8A25D] hover:bg-[#DFB873] text-black text-xs font-semibold rounded-full uppercase tracking-wider transition-all"
                  >
                    <span>Request Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Deliverables Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#0a0a0a]">
          <div className="site-container">
            <div className="flex items-end justify-between mb-8 sm:mb-12">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-1">
                  Deliverables
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
                  Project Gallery
                </h2>
              </div>
              <span className="text-xs text-[#6B7280] hidden sm:inline-block">
                Click to view fullscreen
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#121212] shadow-sm hover:border-[#C8A25D]/40 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/85 text-[#ECE5D8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C8A25D]" />
                  </div>

                  <div className="p-4 bg-[#121212] border-t border-white/10">
                    <p className="text-xs text-[#9CA3AF]">
                      {img.caption || img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        images={project.gallery}
        activeIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#0d0d0d] border-t border-white/10">
          <div className="site-container">
            <div className="flex items-end justify-between mb-8 sm:mb-12">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A25D] font-semibold block mb-1">
                  More Projects
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#ECE5D8]">
                  Related Work
                </h2>
              </div>
              <Link
                to="/work"
                className="text-xs font-semibold uppercase tracking-wider text-[#ECE5D8] hover:text-[#C8A25D] inline-flex items-center gap-1 transition-colors"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8A25D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
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

