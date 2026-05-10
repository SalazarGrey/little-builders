import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import CourseSection from "./components/CourseSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <VideoSection />
      <CourseSection />
      <ContactSection />
    </>
  );
}
