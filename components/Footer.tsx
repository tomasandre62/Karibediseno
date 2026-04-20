"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Twitter, Heart } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Landing Pages", href: "#servicios" },
    { label: "Sitios Web", href: "#servicios" },
    { label: "E-Commerce", href: "#servicios" },
    { label: "Aplicaciones Web", href: "#servicios" },
    { label: "Corporativo", href: "#corporativo" }
  ],
  empresa: [
    { label: "Portafolio", href: "#portafolio" },
    { label: "Proceso", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" }
  ],
  legal: [
    { label: "Términos de servicio", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Garantía de satisfacción", href: "#" }
  ]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-block mb-6">
              <Image
                src="/images/karibe-membrete.png"
                alt="Karibe Diseño"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-accent-foreground/80 leading-relaxed mb-6 max-w-sm">
              Agencia de diseño web inspirada en el Caribe venezolano. 
              Transformamos ideas en experiencias digitales únicas desde Choroní al mundo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/70 text-sm text-center md:text-left">
              © {currentYear} Karibe Diseño. Todos los derechos reservados.
            </p>
            <p className="text-accent-foreground/70 text-sm flex items-center gap-1">
              Hecho con <Heart size={14} className="text-primary fill-primary" /> & el calor de Choroní, Venezuela 🌴
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
