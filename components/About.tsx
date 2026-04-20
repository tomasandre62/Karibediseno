"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Waves, Sun, Palmtree } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl -rotate-3" />
              <div className="relative bg-card rounded-3xl shadow-2xl p-8 flex items-center justify-center h-full border border-border">
                <Image
                  src="/images/karibe-logo.png"
                  alt="Karibe Diseño - Inspirados en el Caribe"
                  width={300}
                  height={300}
                  className="w-full max-w-[280px] h-auto"
                />
              </div>
            </div>

            {/* Floating icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-primary rounded-2xl p-3 shadow-lg hidden md:block"
            >
              <Sun size={28} className="text-primary-foreground" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-secondary rounded-2xl p-3 shadow-lg hidden md:block"
            >
              <Waves size={28} className="text-secondary-foreground" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Palmtree size={16} />
              <span className="text-sm font-medium">Nuestra Historia</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Desde el corazón del{" "}
              <span className="text-primary">Caribe Venezolano</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Karibe Diseño</strong> nació en las costas de 
                <strong className="text-foreground"> Choroní</strong>, un paraíso del Caribe venezolano 
                donde la creatividad fluye como las olas del mar y los colores vibrantes inspiran 
                cada uno de nuestros diseños.
              </p>
              <p>
                Combinamos la calidez tropical con la profesionalidad técnica para crear 
                experiencias digitales que destacan. Cada proyecto es una oportunidad de 
                llevar un poco de ese espíritu caribeño a negocios de todo el mundo.
              </p>
              <p>
                Con más de 5 años de experiencia y más de 50 proyectos completados, 
                hemos ayudado a emprendedores y empresas a transformar su presencia 
                online con diseños únicos, funcionales y memorables.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Heart size={24} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Nuestra misión</div>
                <p className="text-sm text-muted-foreground">
                  Democratizar el diseño web de calidad para negocios de todos los tamaños.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
