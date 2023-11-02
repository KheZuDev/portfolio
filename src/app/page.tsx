import Image from 'next/image'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
