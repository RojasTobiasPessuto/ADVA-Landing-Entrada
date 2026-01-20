import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check, Users, BookOpen, Utensils, Sparkles, Clock } from "lucide-react";

export default function ExclusiveDinner() {
  return (
    <section className="py-32 relative overflow-hidden" id="cena-exclusiva">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-black rounded-[40px] overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4E2F]/30 via-transparent to-[#FF1B8D]/20 pointer-events-none" />
            
            {/* Animated sparkle effect */}
            <motion.div
              className="absolute top-10 right-10 text-[#FF4E2F]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={40} />
            </motion.div>

            <div className="relative z-10 p-12 lg:p-16">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <div className="bg-[#FF4E2F] text-white px-6 py-2 rounded-full text-sm tracking-wider">
                    EXPERIENCIA ÚNICA
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-white mb-4 text-4xl lg:text-5xl"
                >
                  Cena Exclusiva con Nataly Marcus
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-white/80 text-lg max-w-2xl mx-auto"
                >
                  Una noche íntima en el Marangatu para conectar, conversar y 
                  profundizar sobre longevidad y biohacking
                </motion.p>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                {/* Left: What's Included */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-white mb-6 flex items-center gap-2">
                    <Check className="text-[#FF4E2F]" size={24} />
                    Qué incluye
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                        <BookOpen className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-white mb-1">Libro autografiado</div>
                        <div className="text-white/60 text-sm">
                          Copia personal del libro de Nataly Marcus con dedicatoria exclusiva
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                        <Utensils className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-white mb-1">Cena completa a la carta</div>
                        <div className="text-white/60 text-sm">
                          Experiencia gastronómica premium en el prestigioso Marangatu
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF4E2F] rounded-full flex items-center justify-center">
                        <Sparkles className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="text-white mb-1">Presencia de Nataly Marcus</div>
                        <div className="text-white/60 text-sm">
                          Conversación íntima y networking exclusivo con la autora
                        </div>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                {/* Right: Details & CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col justify-between"
                >
                  {/* Details */}
                  <div className="space-y-6 mb-8">
                    {/* Limited Spots */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 text-white mb-2">
                        <Users size={24} className="text-[#FF4E2F]" />
                        <span className="text-lg">Cupos limitados</span>
                      </div>
                      <div className="text-white/80 text-2xl mb-1">
                        Solo 70 lugares disponibles
                      </div>
                      <div className="text-white/60 text-sm">
                        Experiencia íntima diseñada para un grupo reducido
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <Clock className="text-[#FF4E2F] flex-shrink-0" size={20} />
                        <div>
                          <div className="text-white text-sm mb-1">Fecha</div>
                          <div className="text-white/80">Sábado 21 de febrero, 2026</div>
                          <div className="text-white/60 text-sm">20:00 hs</div>
                        </div>
                      </div>
                      <div className="border-t border-white/10 pt-3 mt-3">
                        <div className="text-white text-sm mb-1">Lugar</div>
                        <div className="text-white/80">Restaurante Imarangatu</div>
                        <div className="text-white/60 text-sm">Punta del Este, Uruguay</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://linkly.link/2XFcE"
                    className="block w-full bg-gradient-to-r from-[#FF4E2F] to-[#FF3204] text-white py-5 rounded-full text-center text-lg hover:shadow-2xl hover:shadow-[#FF4E2F]/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255, 78, 47, 0)",
                        "0 0 0 10px rgba(255, 78, 47, 0)",
                        "0 0 0 0 rgba(255, 78, 47, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Reservar mi lugar
                  </motion.a>

                  <p className="text-white/50 text-xs text-center mt-4">
                    * El precio incluye todos los servicios mencionados
                  </p>
                </motion.div>
              </div>

              {/* Bottom Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center pt-8 border-t border-white/10"
              >
                <p className="text-white/60 text-sm max-w-3xl mx-auto">
                  Esta experiencia es independiente del evento principal y requiere 
                  reserva anticipada. Los cupos son extremadamente limitados para 
                  garantizar una experiencia íntima y significativa.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}