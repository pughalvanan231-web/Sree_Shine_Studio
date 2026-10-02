import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Route-level dynamic imports for maximum bundle efficiency
const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const WorkCategoryPage = lazy(() => import("./pages/WorkCategoryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function RouteLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#0a0a0a]" aria-live="polite">
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8A25D] uppercase animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A25D]" />
        <span>SREE SHINE STUDIO</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          {/* 1. Standalone Animated Welcome Landing Page */}
          <Route path="/" element={<WelcomePage />} />

          {/* 2. Main Studio Website with Global Navigation, Layout & Footer */}
          <Route element={<MainLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />

            {/* Services routes (both /our-services and /services) */}
            <Route path="our-services" element={<ServicesPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />

            {/* Work / Category routes matching Flólapo model */}
            <Route path="work" element={<WorkPage />} />
            <Route path="work/:slug" element={<ProjectDetailPage />} />
            <Route path="work-category/:slug" element={<WorkCategoryPage />} />

            {/* Contact Route */}
            <Route path="contact" element={<ContactPage />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
