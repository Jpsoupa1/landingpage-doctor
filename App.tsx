import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { VideoGallery } from "./components/VideoGallery";
import { Transformations } from "./components/Transformations";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";



export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <VideoGallery />
      <Transformations />
      <Testimonials />
      <Footer />
      <Toaster />
    </div>
  );
}
