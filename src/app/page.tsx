import  Navbar  from "@/components/Navbar";
import FeaturedCourses from "@/components/FeaturedCourses";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import { UpcomingWebinars } from "@/components/UpComingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </>
  );
}
