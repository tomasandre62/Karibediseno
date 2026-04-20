"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, ChevronDown, Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer: "El tiempo varía según la complejidad del proyecto. Una landing page puede estar lista en 1-2 semanas, un sitio web completo en 3-4 semanas, y aplicaciones web más complejas entre 6-8 semanas. Te damos un cronograma detallado al inicio del proyecto."
  },
  {
    question: "¿Qué incluye el precio de los servicios?",
    answer: "Todos nuestros servicios incluyen: diseño personalizado, desarrollo responsive, optimización SEO básica, integración de formularios, pruebas de calidad, y soporte post-lanzamiento. El hosting y dominio pueden incluirse o gestionarse por separado según tu preferencia."
  },
  {
    question: "¿Puedo hacer cambios después del lanzamiento?",
    answer: "¡Por supuesto! Ofrecemos paquetes de mantenimiento mensual que incluyen actualizaciones de contenido, mejoras menores y soporte técnico. También puedes contratar modificaciones puntuales cuando las necesites."
  },
  {
    question: "¿Cómo funciona el proceso de pago?",
    answer: "Trabajamos con un modelo de pago por etapas: 50% al iniciar el proyecto (para comenzar el diseño) y 50% al finalizar (antes del lanzamiento). Aceptamos PayPal, transferencias bancarias y pagos a través de plataformas freelance como Fiverr o Upwork."
  },
  {
    question: "¿Ofrecen servicios de hosting y dominio?",
    answer: "Sí, podemos gestionar el hosting y dominio por ti, o trabajar con tu proveedor actual. Recomendamos hostings de alta calidad como Vercel, Netlify o AWS según las necesidades del proyecto."
  },
  {
    question: "¿El sitio web será optimizado para móviles?",
    answer: "Absolutamente. Todos nuestros diseños son mobile-first, lo que significa que se ven y funcionan perfectamente en cualquier dispositivo: smartphones, tablets y computadoras de escritorio."
  },
  {
    question: "¿Incluyen capacitación para gestionar el sitio?",
    answer: "Sí, al finalizar cada proyecto proporcionamos una sesión de capacitación y documentación para que puedas gestionar tu contenido de forma independiente. Para sitios con CMS, te enseñamos a actualizar textos, imágenes y productos."
  },
  {
    question: "¿Trabajan con clientes internacionales?",
    answer: "¡Sí! Trabajamos con clientes de todo el mundo de forma 100% remota. Nos comunicamos a través de videollamadas, email y herramientas de gestión de proyectos. El idioma no es barrera, hablamos español e inglés."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <HelpCircle size={16} />
            <span className="text-sm font-medium">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Resolvemos tus dudas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between gap-4 p-6 rounded-xl text-left transition-all duration-200 ${
                  openIndex === index
                    ? "bg-primary/10 border-primary/30"
                    : "bg-card hover:bg-muted/50"
                } border border-border`}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  openIndex === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-card border border-t-0 border-border rounded-b-xl -mt-2">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿Tienes otra pregunta?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contáctanos directamente
            <ChevronDown size={18} className="rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
