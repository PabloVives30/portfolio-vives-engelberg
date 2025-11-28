import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full bg-[#F5E6D3] ">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex gap-8 px-8 md:px-16 py-6 text-sm font-light bg-[#F5E6D3]/95 backdrop-blur-sm">
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
      <section id="home" className="w-full bg-[#F5E6D3] text-black pt-24 pb-16 md:pb-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-linear-to-br from-[#8B7355] to-[#6B5344] rounded-3xl overflow-hidden p-8 md:p-16 min-h-[450px] flex flex-col justify-between">
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
                  <h1 className="text-6xl md:text-7xl font-light text-white mb-4">Elian Engelberg</h1>
                  <p className="text-xl text-gray-100 font-light">Finanzas y Economia</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shrink-0">
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

      <div className="flex flex-col w-full bg-black rounded-2xl">
          {/* About Section */}
        <section id="about" className="w-full text-white py-4 md:py-24">
          <div className="flex items-center h-full">
            <div className="bg-black rounded-r-3xl px-8 md:px-16 py-16 md:py-24 w-full flex flex-col justify-center">
              <div className="w-full flex flex-col justify-center  md:mb-0">
                <h2 className="text-4xl md:text-5xl font-light mb-8">About Me</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Estudio Economia en la Universidad de San Andrés. Me apasionan las finanzas y entender cómo las decisiones
                  económicas impactan en la vida cotidiana. Busco desarrollarme en el mundo financiero con una mirada
                  analítica y enfocada en generar impacto real. 🚀
                </p>
              </div>
              <div className="w-3/5 h-82 mt-20 relative mx-auto justify-center">
                <Image src="/assets/image7.png" alt="Financial icons" fill className="object-cover rounded-4xl" />
              </div>
            </div>
          </div>
        </section>
        <div className="my-8 border-t w-[80%] mx-auto border-gray-600"></div>
        {/* Services Section */}
        <section id="services" className="w-full flex h-fit text-white py-4 md:py-24">
          <div className="flex w-full items-center  justify-center h-full">
            <div className="bg-black rounded-r-3xl px-8 md:px-16 py-16 md:py-24 w-full flex  justify-center">
              <div className="w-2/5 flex flex-col justify-center mr-16">
                <h2 className="text-4xl md:text-5xl font-light mb-8">Services</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  Transformo datos en decisiones. Analizo, proyecto y diseño estrategias financieras para alcanzar
                  resultados reales. Mi foco está en crear soluciones económicas claras, sostenibles y orientadas al
                  crecimiento.
                </p>
                <Link href="#contact">
                  <button className="px-6 py-2 text-white border border-white hover:bg-white/10 transition-colors bg-transparent rounded-full w-fit">
                    Read more
                  </button>
                </Link>
              </div>
              <div className="w-3/5 h-96 relative">
                <Image src="/assets/image6.png" alt="Financial growth" fill className="object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-[#F5E6D3] text-white py-4 md:py-24">
        <div className="flex items-center justify-center h-full">
          <div className="px-8 md:px-16 py-16 md:py-24 w-full flex justify-center">
            {/* Contact Info */}
            <div className="w-2/5 flex flex-col justify-center mr-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-black mb-[50px]">Contact</h2>
              <div className="text-black leading-relaxed text-lg mb-8">
                <a href="mailto:elianengelberg@gmail.com" className="hover:underline transition text-xl mb-4 block">
                  elianengelberg@gmail.com
                </a>
                <a href="tel:+549113025455" className="hover:underline transition text-xl block">
                  +54911302545522
                </a>
              </div>
              <Link href="mailto:elianengelberg@gmail.com">
                <button className="px-6 py-2 text-black border border-black hover:bg-white/50 transition-colors bg-transparent rounded-full w-fit flex items-center gap-2">
                  Get in touch <ArrowUpRight className="h-6 w-6 text-black" />
                </button>
              </Link>
            </div>

            {/* Contact Image */}
            <div className="w-3/5 h-96 relative">
              <Image src="/assets/image9.png" alt="Analytics workspace" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
