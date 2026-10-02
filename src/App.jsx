import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import WorkPage from "./pages/WorkPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import WorkCategoryPage from "./pages/WorkCategoryPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
