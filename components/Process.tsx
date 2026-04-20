"use client"

import { motion } from "framer-motion"
import { 
  MessageSquare, 
  PenTool, 
  Code, 
  Rocket,
  ClipboardList
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Descubrimiento",
    description: "Analizamos tu negocio, objetivos y audiencia. Entendemos qué necesitas y cómo podemos ayudarte a lograrlo.",
    details: ["Briefing inicial", "Análisis de competencia", "Definición de objetivos", "Propuesta personalizada"]
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseño",
    description: "Creamos mockups y prototipos visuales. Iteramos hasta lograr el diseño perfecto que representa tu marca.",
    details: ["Wireframes", "Diseño visual", "Revisiones ilimitadas", "Aprobación de diseño"]
  },
  {
    number: "03",
    icon: Code,
    title: "Desarrollo",
    description: "Transformamos el diseño en código limpio y optimizado. Implementamos todas las funcionalidades acordadas.",
    details: ["Código limpio", "Responsive design", "Integraciones", "Testing riguroso"]
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    description: "Desplegamos tu sitio y nos aseguramos de que todo funcione perfectamente. Te capacitamos para gestionarlo.",
    details: ["Configuración de hosting", "Optimización SEO", "Capacitación", "Soporte post-lanzamiento"]
  }
]

export default function Process() {
  return (
    <section id="proceso" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <ClipboardList size={16} />
            <span className="text-sm font-medium">Nuestro Proceso</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            De la idea al lanzamiento en 4 pasos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proceso claro y estructurado para garantizar que tu proyecto 
            se entregue a tiempo y supere tus expectativas.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-border z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative z-10"
                >
                  {/* Step number and icon */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative z-20 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <IconComponent size={28} className="text-primary-foreground" />
                    </div>
                    <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                  </div>

                  {/* Content */}
                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                    <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Timeline note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-50 bg-card rounded-2xl p-8 border border-border max-w-2xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-3">
            Tiempo promedio de entrega
          </h3>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div>
              <div className="text-2xl font-bold text-primary">1-2 sem</div>
              <div className="text-sm text-muted-foreground">Landing Page</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">3-4 sem</div>
              <div className="text-sm text-muted-foreground">Sitio Web</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">6-8 sem</div>
              <div className="text-sm text-muted-foreground">Aplicación Web</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
