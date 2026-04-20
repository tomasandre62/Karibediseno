"use client"

import { motion } from "framer-motion"
import { 
  Layout, 
  Monitor, 
  Smartphone, 
  Code2, 
  Palette, 
  Rocket,
  ShoppingCart,
  FileText,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de aterrizaje optimizadas para conversión. Diseño atractivo que transforma visitantes en clientes.",
    features: ["Diseño personalizado", "Optimización SEO", "Formularios integrados", "Analytics incluido"],
    color: "primary"
  },
  {
    icon: Monitor,
    title: "Sitios Web Completos",
    description: "Sitios web profesionales con múltiples secciones, blog integrado y panel de administración.",
    features: ["Múltiples páginas", "CMS integrado", "Blog y noticias", "Diseño responsive"],
    color: "secondary"
  },
  {
    icon: Code2,
    title: "Aplicaciones Web",
    description: "Desarrollo de aplicaciones web personalizadas con funcionalidades avanzadas para tu negocio.",
    features: ["Funcionalidades custom", "Base de datos", "API integradas", "Panel de control"],
    color: "accent"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Tiendas online completas con carrito de compras, pasarelas de pago y gestión de inventario.",
    features: ["Carrito de compras", "Múltiples pagos", "Gestión de productos", "Reportes de ventas"],
    color: "primary"
  },
  {
    icon: Smartphone,
    title: "Diseño Responsive",
    description: "Todos nuestros diseños se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla.",
    features: ["Mobile-first", "Tablets optimizado", "Cross-browser", "Touch friendly"],
    color: "secondary"
  },
  {
    icon: Rocket,
    title: "Optimización Web",
    description: "Mejoramos el rendimiento, velocidad y posicionamiento de tu sitio web existente.",
    features: ["Velocidad mejorada", "SEO técnico", "Core Web Vitals", "Accesibilidad"],
    color: "accent"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Palette size={16} />
            <span className="text-sm font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluciones digitales para cada necesidad
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde una simple landing page hasta aplicaciones web complejas, 
            tenemos la experiencia para llevar tu proyecto al siguiente nivel.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colorClasses = {
              primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
              secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
              accent: "bg-accent/10 text-accent-foreground group-hover:bg-accent group-hover:text-accent-foreground"
            }
            
            return (
              <motion.div
                key={index}
                variants={item}
                className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <IconComponent size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-200"
                >
                  Solicitar cotización
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
          >
            Cuéntanos tu proyecto y te ayudamos
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
