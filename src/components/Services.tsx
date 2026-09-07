import { motion } from 'framer-motion';
import { Code2, Search, TrendingUp, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Diseño y Desarrollo Web a Medida',
    description: 'Webs ultrarrápidas, responsive y optimizadas para conversión (Shopify, WordPress, Webflow, Custom Code).',
    tags: ['Shopify', 'WordPress', 'Webflow', 'Custom'],
  },
  {
    icon: Search,
    title: 'Posicionamiento SEO (Google)',
    description: 'Estrategia de palabras clave, SEO local y optimización técnica para escalar a la primera página.',
    tags: ['SEO Local', 'Técnico', 'Keywords'],
  },
  {
    icon: TrendingUp,
    title: 'Estrategia de Visibilidad y Tráfico',
    description: 'Campañas de captación, optimización de ficha de Google Business y presencia en redes.',
    tags: ['Google Business', 'Ads', 'Redes Sociales'],
  },
  {
    icon: ShieldCheck,
    title: 'Mantenimiento y Seguridad',
    description: 'Tu web siempre activa, protegida y actualizada sin que muevas un dedo.',
    tags: ['Seguridad', 'Backups', 'Updates'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 bg-[#f7fbff]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Servicios</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-[#071a33]">
            Soluciones que <span className="text-gradient">impulsan tu negocio</span>
          </h2>
          <p className="text-[#3a5a7a] max-w-2xl mx-auto">
            Todo lo que necesitas para dominar tu mercado online, en un solo lugar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-8 group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-700/10 border border-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-[#071a33]">{service.title}</h3>
                  <p className="text-[#3a5a7a] leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
