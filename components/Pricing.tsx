"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Crown, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Landing Page",
    description: "Ideal para promociones, lanzamientos y captación de leads",
    price: "Desde $299",
    icon: Sparkles,
    features: [
      "Diseño personalizado",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "Responsive design",
      "SEO básico",
      "1 revisión de diseño",
      "Entrega en 1-2 semanas"
    ],
    highlighted: false
  },
  {
    name: "Sitio Web Profesional",
    description: "Para negocios que necesitan una presencia completa",
    price: "Desde $599",
    icon: Crown,
    features: [
      "Hasta 10 páginas",
      "Diseño premium",
      "Blog integrado",
      "Panel de administración",
      "Optimización SEO",
      "Integración redes sociales",
      "3 revisiones de diseño",
      "Soporte 30 días",
      "Entrega en 3-4 semanas"
    ],
    highlighted: true,
    badge: "Más Popular"
  },
  {
    name: "Aplicación Web",
    description: "Soluciones a medida con funcionalidades avanzadas",
    price: "Desde $1,499",
    icon: Rocket,
    features: [
      "Desarrollo a medida",
      "Base de datos",
      "Autenticación de usuarios",
      "Panel de administración",
      "API integradas",
      "Testing completo",
      "Revisiones ilimitadas",
      "Soporte 90 días",
      "Entrega en 6-8 semanas"
    ],
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Crown size={16} />
            <span className="text-sm font-medium">Planes y Precios</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Inversión transparente para tu proyecto
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Precios claros sin sorpresas. Cada proyecto incluye diseño, desarrollo, 
            y soporte para garantizar tu éxito.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative bg-card rounded-2xl p-8 border-2 flex flex-col ${
                  plan.highlighted 
                    ? "border-primary shadow-xl scale-105" 
                    : "border-border hover:border-primary/30"
                } transition-all duration-300`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    plan.highlighted ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">USD</div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contacto"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Solicitar cotización
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            ¿Tienes un proyecto especial?{" "}
            <Link href="#contacto" className="text-primary font-semibold hover:underline">
              Contáctanos para una cotización personalizada
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
