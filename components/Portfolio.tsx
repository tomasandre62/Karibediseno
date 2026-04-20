"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Eye, Layers } from "lucide-react"
import Link from "next/link"

const categories = ["Todos", "Landing Pages", "E-Commerce", "Corporativo", "Aplicaciones"]

const projects = [
  {
    id: 1,
    title: "RestauranteGourmet",
    category: "Landing Pages",
    description: "Landing page para restaurante de alta cocina con reservas online",
    tags: ["React", "Next.js", "Tailwind"],
    color: "from-primary/80 to-primary"
  },
  {
    id: 2,
    title: "TechStore Pro",
    category: "E-Commerce",
    description: "Tienda online de productos tecnológicos con carrito inteligente",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-secondary/80 to-secondary"
  },
  {
    id: 3,
    title: "Consultora Legal ABC",
    category: "Corporativo",
    description: "Sitio corporativo para bufete de abogados con sistema de citas",
    tags: ["WordPress", "Custom Theme", "SEO"],
    color: "from-accent/80 to-accent"
  },
  {
    id: 4,
    title: "FitTrack App",
    category: "Aplicaciones",
    description: "Aplicación web para seguimiento de rutinas de ejercicio",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-primary/80 to-secondary"
  },
  {
    id: 5,
    title: "Inmobiliaria Costa",
    category: "Landing Pages",
    description: "Landing page para venta de propiedades en la costa",
    tags: ["Next.js", "Framer Motion", "Maps"],
    color: "from-secondary/80 to-primary"
  },
  {
    id: 6,
    title: "ClínicaSalud+",
    category: "Corporativo",
    description: "Portal médico con sistema de citas y expedientes",
    tags: ["React", "Firebase", "HIPAA"],
    color: "from-accent/80 to-secondary"
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portafolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <Layers size={16} />
            <span className="text-sm font-medium">Portafolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proyectos que hablan por sí mismos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada proyecto es único, diseñado con dedicación y enfocado en resultados. 
            Mira lo que hemos creado para nuestros clientes.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-foreground/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/90 p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <Eye size={32} />
                      </div>
                      <span className="text-sm font-medium">Vista previa del proyecto</span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-foreground hover:scale-110 transition-transform">
                      <Eye size={20} />
                    </button>
                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Quiero un proyecto así
            <ExternalLink size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
