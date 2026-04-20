"use client"

import { motion } from "framer-motion"
import { 
  Building2, 
  Shield, 
  FileCheck, 
  Users, 
  Headphones,
  BarChart3,
  Lock,
  Clock,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const corporateFeatures = [
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Protocolos de seguridad avanzados, SSL, backups automáticos y cumplimiento GDPR."
  },
  {
    icon: FileCheck,
    title: "Branding Consistente",
    description: "Diseño alineado con tu manual de identidad corporativa y guías de estilo."
  },
  {
    icon: Users,
    title: "Múltiples Usuarios",
    description: "Sistema de roles y permisos para gestión de contenido por equipos."
  },
  {
    icon: Headphones,
    title: "Soporte Prioritario",
    description: "Atención dedicada con tiempos de respuesta garantizados 24/7."
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description: "Dashboards personalizados con métricas de negocio e integraciones."
  },
  {
    icon: Lock,
    title: "Acceso Controlado",
    description: "Autenticación empresarial, SSO y gestión de accesos."
  }
]

const guidelines = [
  "Paleta de colores institucional",
  "Tipografías corporativas",
  "Uso correcto del logotipo",
  "Elementos gráficos aprobados",
  "Tono de comunicación",
  "Plantillas estandarizadas"
]

export default function Corporate() {
  return (
    <section id="corporativo" className="py-20 lg:py-32 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <Building2 size={16} />
            <span className="text-sm font-medium">Soluciones Corporativas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Diseño web para empresas que buscan excelencia
          </h2>
          <p className="text-lg text-accent-foreground/80 leading-relaxed">
            Entendemos las necesidades únicas del sector empresarial. 
            Ofrecemos soluciones robustas que cumplen con los más altos estándares corporativos.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {corporateFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-accent-foreground/5 backdrop-blur-sm rounded-xl p-5 border border-accent-foreground/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-accent-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Guidelines Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <FileCheck size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Brand Guidelines</h3>
                  <p className="text-sm text-muted-foreground">Respetamos tu identidad corporativa</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Trabajamos siguiendo las directrices de marca de tu empresa para garantizar 
                coherencia visual en todos los puntos de contacto digital.
              </p>

              <ul className="space-y-3 mb-8">
                {guidelines.map((guideline, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-sm">{guideline}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={18} className="text-secondary" />
                  <span className="font-semibold text-sm">Tiempo de entrega</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Proyectos corporativos: 4-8 semanas según complejidad
                </p>
              </div>

              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200"
              >
                Solicitar propuesta corporativa
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-accent-foreground/5 rounded-xl p-4 text-center border border-accent-foreground/10">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-accent-foreground/70">Confidencialidad</div>
              </div>
              <div className="bg-accent-foreground/5 rounded-xl p-4 text-center border border-accent-foreground/10">
                <div className="text-2xl font-bold text-primary">NDA</div>
                <div className="text-xs text-accent-foreground/70">Disponible</div>
              </div>
              <div className="bg-accent-foreground/5 rounded-xl p-4 text-center border border-accent-foreground/10">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-accent-foreground/70">Soporte</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
