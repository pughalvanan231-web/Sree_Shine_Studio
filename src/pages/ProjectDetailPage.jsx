import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronRight, 
  CheckCircle2, 
  Maximize2,
  Calendar,
  Layers,
  Sparkles
} from "lucide-react";
import LightboxModal from "../components/LightboxModal";
import ProjectCard from "../components/ProjectCard";
import ContactInvitation from "../components/ContactInvitation";
import SeoMeta from "../components/SeoMeta";
import { PROJECTS } from "../content/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Related projects (excluding current)
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
      <div className="pt-28 pb-4 bg-[#FBF9F5] border-b border-[#DDD2BF]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#848994]">
            <Link to="/home" className="hover:text-[#191B1E] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/work" className="hover:text-[#191B1E] transition-colors">Our Work</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#191B1E] font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-10 pb-16 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFE7] border border-[#DDD2BF] text-xs font-semibold text-[#9C7741]">
              <Sparkles className="w-3.5 h-3.5 text-[#C4A47C]" />
              <span>{project.category}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#191B1E] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#585C65] max-w-2xl leading-relaxed">
              {project.tagline || project.shortDescription}
            </p>
          </div>

          {/* Project Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 my-8 border-y border-[#DDD2BF]/60 text-xs">
            <div>
              <span className="text-[#848994] uppercase tracking-wider block mb-1">Project Type</span>
              <span className="font-semibold text-[#191B1E]">{project.client}</span>
            </div>
            <div>
              <span className="text-[#848994] uppercase tracking-wider block mb-1">Discipline</span>
              <span className="font-semibold text-[#191B1E]">{project.category}</span>
            </div>
            <div>
              <span className="text-[#848994] uppercase tracking-wider block mb-1">Year</span>
              <span className="font-semibold text-[#191B1E]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#848994] uppercase tracking-wider block mb-1">Studio Role</span>
              <span className="font-semibold text-[#191B1E]">Full Creative Direction</span>
            </div>
          </div>

          {/* Main Hero Showcase Media */}
          <div className="relative rounded-2xl overflow-hidden border border-[#DDD2BF] shadow-2xl aspect-[16/9] bg-[#ECE5D8]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

        </div>
      </section>

      {/* Brief & Creative Approach Narrative */}
      <section className="py-20 bg-[#F3EFE7] border-y border-[#DDD2BF]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* The Brief & Approach */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9C7741] font-semibold block mb-2">
                  The Context & Brief
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#191B1E] mb-3">
                  Understanding the Objective
                </h2>
                <p className="text-sm sm:text-base text-[#585C65] leading-relaxed">
                  {project.brief}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#9C7741] font-semibold block mb-2">
                  Creative Direction & Craft
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#191B1E] mb-3">
                  Our Method & Execution
                </h2>
                <p className="text-sm sm:text-base text-[#585C65] leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* Outcome note */}
              {project.outcome && (
                <div className="p-6 rounded-2xl bg-white border border-[#DDD2BF]/80 shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-[#191B1E] mb-2">
                    Verified Outcome & Result
                  </h3>
                  <p className="text-sm text-[#585C65] leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>

            {/* Deliverables Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#DDD2BF] shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-[#191B1E] mb-4">
                  Project Deliverables
                </h3>
                <ul className="space-y-3">
                  {project.deliverables?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#191B1E]">
                      <CheckCircle2 className="w-4 h-4 text-[#C4A47C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-[#DDD2BF]/60">
                  <Link
                    to={`/contact?service=${encodeURIComponent(project.category)}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#191B1E] hover:bg-[#2C2F33] text-[#FBF9F5] text-xs font-semibold rounded-xl transition-colors"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C4A47C]" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Deliverables Gallery Showcase with Lightbox trigger */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9C7741] font-semibold block mb-1">
                  Visual Deliverables
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#191B1E]">
                  Project Gallery
                </h2>
              </div>
              <span className="text-xs text-[#848994] hidden sm:inline-block">
                Click any image to view in fullscreen gallery
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#DDD2BF]/80 bg-[#ECE5D8] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Floating expand indicator */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FBF9F5]/90 backdrop-blur-sm text-[#191B1E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-[#9C7741]" />
                  </div>

                  {/* Caption banner below image */}
                  <div className="p-4 bg-white border-t border-[#DDD2BF]/50">
                    <p className="text-xs text-[#585C65]">
                      {img.caption || img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Accessible Lightbox Modal */}
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
        <section className="py-20 bg-[#F3EFE7] border-t border-[#DDD2BF]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9C7741] font-semibold block mb-1">
                  More From Sree Shine Studio
                </span>
                <h2 className="font-serif text-3xl font-semibold text-[#191B1E]">
                  Related Projects
                </h2>
              </div>
              <Link
                to="/work"
                className="text-xs font-semibold text-[#191B1E] hover:text-[#9C7741] inline-flex items-center gap-1"
              >
                <span>View All Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p, idx) => (
                <ProjectCard key={p.id} project={p} index={idx} />
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
