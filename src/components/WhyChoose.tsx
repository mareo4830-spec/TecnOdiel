import { motion } from 'framer-motion';
import { Zap, Target, HeartHandshake, Clock, BarChart3, Lock } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Velocidad de carga relámpago',
    description: 'Tus páginas cargan en menos de 1 segundo. Google y tus clientes lo agradecen.',
  },
  {
    icon: Target,
    title: 'Enfoque 100% orientado a ventas',
    description: 'No hacemos webs bonitas. Hacemos máquinas de captación de clientes.',
  },
  {
    icon: HeartHandshake,
    title: 'Soporte cercano y sin tecnicismos',
    description: 'Hablamos tu idioma. Respuestas claras y rápidas, sin jerga técnica innecesaria.',
  },
  {
    icon: Clock,
    title: 'Entrega puntual garantizada',
    description: 'Cumplimos plazos. Tu proyecto se lanza cuando dijimos que se lanzaría.',
  },
  {
    icon: BarChart3,
    title: 'Reportes claros y medibles',
    description: 'Cada mes sabes exactamente qué resultados estás obteniendo de tu inversión.',
  },
  {
    icon: Lock,
    title: 'Seguridad de nivel bancario',
    description: 'SSL, backups diarios y monitorización 24/7. Tu web siempre segura.',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 px-6 bg-[#f7fbff]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Por qué elegirnos</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-[#071a33]">
            El diferencia que <span className="text-gradient">marca la diferencia</span>
          </h2>
          <p className="text-[#3a5a7a] max-w-2xl mx-auto">
            No somos una agencia más. Somos tu socio de crecimiento digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-700/10 border border-blue-400/20 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#071a33] mb-2">{reason.title}</h3>
              <p className="text-[#3a5a7a] text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
