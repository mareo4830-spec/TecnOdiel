import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: 'linear-gradient(135deg, #00a8ff 0%, #0369a1 50%, #00a8ff 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 10s ease infinite',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7fbff]/60 to-[#f7fbff]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-[#3a5a7a]">Agencia Web de Alto Rendimiento</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 text-[#071a33]"
        >
          Transformamos tu presencia digital en un{' '}
          <span className="text-gradient">imán de clientes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[#3a5a7a] max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Diseño web de alto impacto, posicionamiento SEO estratégico y visibilidad online para marcas que buscan liderar su sector.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-base overflow-hidden animate-pulse-glow hover:scale-105 transition-transform"
          >
            <span className="relative z-10">Solicitar Auditoría Gratuita</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-[#102a43] font-semibold text-base hover:border-blue-400/40 transition-all hover:scale-105"
          >
            <Play className="w-5 h-5 text-blue-500" />
            Ver Proyectos
          </a>
        </motion.div>

        {/* Mockup showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-2">
            <div className="rounded-xl overflow-hidden bg-white">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <div className="ml-3 text-xs text-slate-400 font-mono">tecnodiel.com/dashboard</div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Tráfico', value: '+320%', color: 'text-blue-500' },
                  { label: 'Conversiones', value: '+180%', color: 'text-blue-700' },
                  { label: 'Ventas', value: '+240%', color: 'text-blue-400' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl p-4 text-center bg-slate-50 border border-slate-100">
                    <div className={`font-display font-bold text-2xl ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <div className="rounded-xl p-4 h-32 flex items-end gap-2 bg-slate-50 border border-slate-100">
                  {[40, 55, 35, 70, 50, 85, 65, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-blue-400/40 to-blue-600/40"
                      style={{ height: `${h}%`, animation: `float ${3 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
