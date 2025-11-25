'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image src="/assets/image1.png" alt="Building hero" fill className="object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
          {/* Top Content */}
          <div className="flex flex-col gap-8 max-w-xl">
            <h2 className="text-sm font-light tracking-wider text-gray-300">ARQUITECTO</h2>
            <Link href="#about">
                <button className="flex items-center gap-2 px-8 py-2 rounded-full border border-gray-500 text-white hover:bg-white/10 transition-colors bg-transparent">
                    Get in touch <ArrowUpRight className="h-4 w-4" />
                </button>
            </Link>
          </div>

          {/* Bottom Title */}
          <h1 className="text-6xl md:text-7xl font-light tracking-tight">Pablo Vives</h1>
        </div>
      </section>

      {/* About Section */}
      <section  id="about"className="bg-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col gap-12">
            <div className="relative h-80 md:h-96 w-full">
              <Image src="/assets/image2.png" alt="Curved architecture" fill className="object-cover" />
            </div>

            <div className="flex justify-center align-center">
              <div className="flex flex-col w-[500px] gap-4">
                <h2 className="text-4xl md:text-5xl font-light">About Me</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Soy Pablo Vives, futuro estudiante de Arquitectura en la UBA. Me apasiona crear espacios que combinen
                    diseño, funcionalidad y una identidad propia.
                </p>
              </div>

              <Link  className="ml-[400px] mt-9 justify-center" href="#contact">
                <button  className="px-8 py-2 text-white border border-gray-500 hover:bg-white/10 transition-colors bg-transparent w-fit rounded-2xl">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-light text-black">Services</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Diseño y proyecto espacios con identidad. Busco crear arquitectura funcional, estética y conectada con
                las personas.
              </p>
              <Link href="#contact">
                <button className="px-8 py-2 text-black border border-gray-400 hover:bg-black/5 transition-colors bg-transparent">
                    Read more
                    </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-80 md:h-96 w-full">
              <Image src="/assets/image3.png" alt="Building services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col gap-12">
            {/* Contact Image */}
            <div className="relative h-80 md:h-96 w-full">
              <Image src="/assets/image4.png" alt="Contact building" fill className="object-cover" />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl md:text-5xl font-light">Contact</h2>

              <div className="flex gap-190">
                <div className="flex flex-col gap-4">
                    <a href="mailto:vivespablo6@gmail.com" className="text-xl text-gray-300 hover:text-white transition">
                    vivespablo6@gmail.com
                    </a>
                    <a href="tel:+5491140911838" className="text-xl text-gray-300 hover:text-white transition">
                    +5491140911838
                    </a>
                </div>

                <Link href="mailto:vivespablo6@gmail.com">
                    <button className="flex items-center gap-2 px-8 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
                        Contact me <ArrowUpRight className="h-4 w-4" />
                        </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
