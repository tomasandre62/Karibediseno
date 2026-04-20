"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Send, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock,
  CheckCircle2,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: ""
    })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MessageSquare size={16} />
            <span className="text-sm font-medium">Contacto</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cuéntanos sobre tu idea y te responderemos en menos de 24 horas 
            con una propuesta personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-muted-foreground">
                    Te responderemos en menos de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa / Negocio
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Tipo de proyecto *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="landing">Landing Page</option>
                        <option value="website">Sitio Web Completo</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="webapp">Aplicación Web</option>
                        <option value="corporate">Proyecto Corporativo</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Presupuesto estimado
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="299-499">$299 - $499</option>
                        <option value="500-999">$500 - $999</option>
                        <option value="1000-2499">$1,000 - $2,499</option>
                        <option value="2500-4999">$2,500 - $4,999</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Describe tu proyecto, objetivos y cualquier detalle importante..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:hola@karibediseno.com" className="text-muted-foreground hover:text-primary transition-colors">
                    Contacto@karibediseno.com
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">
                    Santiago, Chile <br />
                    <span className="text-sm">Trabajamos 100% remoto a nivel mundial 🌴</span>
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Tiempo de respuesta</h4>
                  <p className="text-muted-foreground">
                    Respondemos en menos de 24 horas<br />
                    <span className="text-sm">Lunes a Viernes, 9am - 6pm EST</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-muted rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">Síguenos en redes</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-border"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-border"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-border"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>

            {/* Freelance Platforms */}
            <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
              <h4 className="font-semibold text-foreground mb-3">
                También nos encuentras en:
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground border border-border">
                  Fiverr ⭐ 4.9
                </span>
                <span className="px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground border border-border">
                  Upwork ⭐ 4.8
                </span>
                <span className="px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground border border-border">
                  Freelancer ⭐ 5.0
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
