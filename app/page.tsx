import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Portfolio from "@/components/Portfolio"
import Corporate from "@/components/Corporate"
import Process from "@/components/Process"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Corporate />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
