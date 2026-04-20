"use client"

import { motion } from "framer-motion"
import { Star, Quote, MessageCircle } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStartup",
    content: "Karibe Diseño transformó completamente nuestra presencia online. El diseño es increíble y las conversiones aumentaron un 150%. Muy profesionales y creativos.",
    rating: 5,
    project: "Landing Page + E-commerce"
  },
  {
    name: "Carlos Mendoza",
    role: "Director, Consultora Legal",
    content: "Excelente trabajo en nuestro sitio corporativo. Entendieron perfectamente nuestras necesidades y entregaron antes del plazo. El soporte post-lanzamiento es excepcional.",
    rating: 5,
    project: "Sitio Corporativo"
  },
  {
    name: "Ana Rodríguez",
    role: "Fundadora, Boutique Online",
    content: "Mi tienda online quedó hermosa y funcional. Las ventas se duplicaron desde el lanzamiento. Karibe es mi primera opción para cualquier proyecto web.",
    rating: 5,
    project: "E-commerce"
  },
  {
    name: "Roberto Pérez",
    role: "Marketing Manager",
    content: "Trabajamos con Karibe en múltiples landing pages para campañas. Siempre entregan diseños frescos y optimizados. Son parte fundamental de nuestro equipo.",
    rating: 5,
    project: "Landing Pages (5)"
  },
  {
    name: "Luisa Fernández",
    role: "Directora, Academia Online",
    content: "La aplicación web que desarrollaron para nuestra academia funciona perfectamente. Interfaz intuitiva y rendimiento excelente. Altamente recomendados.",
    rating: 5,
    project: "Aplicación Web"
  },
  {
    name: "Miguel Santos",
    role: "Emprendedor",
    content: "Como emprendedor, necesitaba un sitio que reflejara mi visión. Karibe lo logró con creces. Proceso transparente y resultados impresionantes.",
    rating: 5,
    project: "Sitio Web + Blog"
  }
]

const platforms = [
  { name: "Fiverr", rating: "4.9", reviews: "50+" },
  { name: "Upwork", rating: "4.8", reviews: "35+" },
  { name: "Freelancer", rating: "5.0", reviews: "25+" }
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <MessageCircle size={16} />
            <span className="text-sm font-medium">Testimonios</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Aquí comparten sus experiencias trabajando con nosotros.
          </p>
        </motion.div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {platforms.map((platform, idx) => (
            <div 
              key={idx}
              className="bg-card rounded-xl px-6 py-4 border border-border flex items-center gap-4"
            >
              <div>
                <div className="font-bold text-foreground">{platform.name}</div>
                <div className="text-sm text-muted-foreground">{platform.reviews} reseñas</div>
              </div>
              <div className="flex items-center gap-1">
                <Star size={18} className="fill-primary text-primary" />
                <span className="font-bold text-foreground">{platform.rating}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Quote size={20} className="text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Project tag */}
              <div className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full inline-block w-fit mb-4">
                {testimonial.project}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-muted-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
