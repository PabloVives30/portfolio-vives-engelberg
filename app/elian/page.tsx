'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#F5E6D3] text-black">
      {/* Navigation */}
      <nav className="flex gap-8 px-8 md:px-16 py-6 text-sm font-light">
        <Link href="#home" className="hover:text-gray-600 transition">
          Home
        </Link>
        <Link href="#about" className="hover:text-gray-600 transition">
          About
        </Link>
        <Link href="#services" className="hover:text-gray-600 transition">
          Services
        </Link>
        <Link href="#contact" className="hover:text-gray-600 transition">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-8 md:px-16 py-12 md:py-20 bg-[#F5E6D3]">
        <div className="max-w-4xl">
          {/* Hero Card */}
          <div className="relative bg-gradient-to-br from-[#8B7355] to-[#6B5344] rounded-3xl overflow-hidden p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
            {/* Background Image */}
            <Image
              src="/assets/image5.png"
              alt="Piggy bank"
              fill
              className="object-cover absolute inset-0 opacity-70"
            />

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-5xl md:text-6xl font-light text-white mb-4">Elian Engelberg</h1>
                  <p className="text-lg text-gray-100 font-light">Finanzas y Economia</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <ArrowUpRight className="h-6 w-6 text-white" />
                </div>
              </div>

              <Link href="#contact">
                <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors border border-white/30 w-fit">
                  Get in touch <ArrowUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 md:px-16 py-16 md:py-24 bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto bg-black text-white rounded-r-3xl p-8 md:p-12 flex items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-light mb-8">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Estudio Economia en la Universidad de San Andrés. Me apasionan las finanzas y entender cómo las decisiones
              económicas impactan en la vida cotidiana. Busco desarrollarme en el mundo financiero con una mirada
              analítica y enfocada en generar impacto real. 🚀
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden">
              <Image src="/assets/image6.png" alt="Financial icons" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 md:px-16 py-16 md:py-24 bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto bg-black text-white rounded-r-3xl p-8 md:p-12 flex items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-light mb-8">Services</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Transformo datos en decisiones. Analizo, proyecto y diseño estrategias financieras para alcanzar
              resultados reales. Mi foco está en crear soluciones económicas claras, sostenibles y orientadas al
              crecimiento.
            </p>
            <Link href="#contact">
              <button className="px-6 py-2 text-white border border-white hover:bg-white/10 transition-colors bg-transparent rounded-full">
                Read more
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden">
              <Image src="/assets/image7.png" alt="Financial growth" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 md:px-16 py-16 md:py-24 bg-[#F5E6D3]">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">Contact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <a href="mailto:elianengelberg@gmail.com" className="text-gray-700 hover:text-black transition text-lg">
                  elianengelberg@gmail.com
                </a>
                <a href="tel:+549113025455" className="text-gray-700 hover:text-black transition text-lg">
                  +54911302545522
                </a>
              </div>

              <Link href="mailto:elianengelberg@gmail.com">
                <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-black text-black hover:bg-black/10 transition-colors bg-transparent w-fit">
                  Get in touch <ArrowUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Contact Image */}
            <div className="flex-1">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                <Image src="/assets/image9.png" alt="Analytics workspace" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
