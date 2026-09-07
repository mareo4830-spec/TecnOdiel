import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Boutique Aurora',
    sector: 'Moda & E-commerce',
    description: 'Tienda online con catálogo de 500+ productos y checkout optimizado.',
    metrics: [
      { label: 'Ventas', value: '+240%', before: '€8k/mes', after: '€27k/mes' },
      { label: 'Tráfico orgánico', value: '+310%', before: '1.2k/mes', after: '4.9k/mes' },
      { label: 'Conversión', value: '+85%', before: '1.1%', after: '2.0%' },
    ],
    gradient: 'from-blue-400/15 to-blue-600/10',
  },
  {
    name: 'Clínica Vitalis',
    sector: 'Salud & Servicios',
    description: 'Web corporativa con sistema de citas online y SEO local.',
    metrics: [
      { label: 'Citas online', value: '+180%', before: '30/mes', after: '84/mes' },
      { label: 'Posición Google', value: 'Top 1', before: 'Pág. 3', after: '#1' },
      { label: 'Llamadas', value: '+150%', before: '50/mes', after: '125/mes' },
    ],
    gradient: 'from-sky-400/15 to-blue-700/10',
  },
  {
    name: 'Restaurante Fuego',
    sector: 'Hostelería',
    description: 'Web con carta digital, reservas y optimización de Google Business.',
    metrics: [
      { label: 'Reservas', value: '+220%', before: '60/sem', after: '192/sem' },
      { label: 'Reseñas Google', value: '+340%', before: '12 reseñas', after: '53 reseñas' },
      { label: 'Pedidos online', value: 'Nuevo', before: '—', after: '€4k/mes' },
    ],
    gradient: 'from-cyan-400/15 to-blue-500/10',
  },
  {
    name: 'TechNova Solutions',
    sector: 'B2B & Software',
    description: 'Plataforma SaaS con landing de captación y blog técnico SEO.',
    metrics: [
      { label: 'Leads B2B', value: '+290%', before: '15/mes', after: '58/mes' },
      { label: 'Tráfico orgánico', value: '+420%', before: '800/mes', after: '4.2k/mes' },
      { label: 'Demo requests', value: '+160%', before: '10/mes', after: '26/mes' },
    ],
    gradient: 'from-blue-500/15 to-indigo-600/10',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % projects.length);
  const prev = () => setActive((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[active];

  return (
    <section id="portfolio" className="relative py-24 px-6 bg-[#f7fbff]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Proyectos</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-[#071a33]">
            Resultados que <span className="text-gradient">hablan por sí solos</span>
          </h2>
          <p className="text-[#3a5a7a] max-w-2xl mx-auto">
            Casos reales de clientes que transformaron su negocio con nosotros.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Visual side */}
                <div className={`relative p-8 md:p-12 bg-gradient-to-br ${project.gradient} flex flex-col justify-between min-h-[320px]`}>
                  <div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                      {project.sector}
                    </span>
                    <h3 className="font-display font-bold text-3xl mt-4 text-[#071a33]">{project.name}</h3>
                    <p className="text-[#3a5a7a] mt-3 max-w-sm">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-500 text-sm font-medium mt-6">
                    Ver caso completo
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Metrics side */}
                <div className="p-8 md:p-12 flex flex-col justify-center gap-6 bg-white">
                  {project.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-sm text-[#3a5a7a]">{metric.label}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-400 line-through">{metric.before}</span>
                          <ChevronRight className="w-3 h-3 text-slate-400" />
                          <span className="text-sm text-[#071a33] font-medium">{metric.after}</span>
                        </div>
                      </div>
                      <div className="font-display font-bold text-2xl text-gradient">{metric.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:border-blue-400/30 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#3a5a7a]" />
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-8 bg-gradient-to-r from-blue-400 to-blue-600' : 'w-2 bg-slate-200'
                  }`}
                  aria-label={`Proyecto ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:border-blue-400/30 transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-[#3a5a7a]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
