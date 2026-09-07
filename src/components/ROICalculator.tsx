import { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Briefcase, UtensilsCrossed, Building2, TrendingUp, ArrowRight } from 'lucide-react';

const businessTypes = [
  { id: 'ecommerce', label: 'E-commerce', icon: Store, trafficBoost: 3.2, conversionBoost: 2.5 },
  { id: 'services', label: 'Servicios', icon: Briefcase, trafficBoost: 2.8, conversionBoost: 3.0 },
  { id: 'restaurant', label: 'Restaurante', icon: UtensilsCrossed, trafficBoost: 3.5, conversionBoost: 2.2 },
  { id: 'corporate', label: 'Corporativo', icon: Building2, trafficBoost: 2.5, conversionBoost: 2.8 },
];

const goals = [
  { id: 'seo', label: 'Posicionamiento SEO' },
  { id: 'web', label: 'Nueva Web' },
  { id: 'traffic', label: 'Más Tráfico' },
  { id: 'maintenance', label: 'Mantenimiento' },
];

export default function ROICalculator() {
  const [business, setBusiness] = useState('ecommerce');
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['seo']);
  const [visitors, setVisitors] = useState(1000);

  const selected = businessTypes.find((b) => b.id === business)!;
  const goalMultiplier = 1 + selectedGoals.length * 0.15;
  const projectedTraffic = Math.round(visitors * selected.trafficBoost * goalMultiplier);
  const projectedConversions = Math.round(projectedTraffic * 0.03 * selected.conversionBoost);

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  return (
    <section id="roi" className="relative py-24 px-6 bg-[#f7fbff]">
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Calculadora ROI</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-[#071a33]">
            Descubre tu <span className="text-gradient">potencial de crecimiento</span>
          </h2>
          <p className="text-[#3a5a7a] max-w-2xl mx-auto">
            Selecciona tu tipo de negocio y objetivos para ver una estimación instantánea.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="text-sm font-semibold text-[#102a43] mb-3 block">Tipo de negocio</label>
                <div className="grid grid-cols-2 gap-3">
                  {businessTypes.map((bt) => (
                    <button
                      key={bt.id}
                      onClick={() => setBusiness(bt.id)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all text-sm font-medium ${
                        business === bt.id
                          ? 'bg-gradient-to-r from-blue-500/10 to-blue-700/10 border-blue-400/40 text-blue-700'
                          : 'bg-slate-50 border-slate-100 text-[#3a5a7a] hover:border-blue-200'
                      }`}
                    >
                      <bt.icon className="w-4 h-4" />
                      {bt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#102a43] mb-3 block">
                  Visitas mensuales actuales: <span className="text-blue-500 font-bold">{visitors.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#102a43] mb-3 block">Objetivos</label>
                <div className="flex flex-wrap gap-2">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                        selectedGoals.includes(goal.id)
                          ? 'bg-gradient-to-r from-blue-500 to-blue-700 border-transparent text-white'
                          : 'bg-slate-50 border-slate-100 text-[#3a5a7a] hover:border-blue-200'
                      }`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-2xl p-6 flex flex-col justify-center gap-6 bg-gradient-to-br from-blue-500/5 to-blue-700/5 border border-blue-100">
              <div>
                <div className="text-sm text-[#3a5a7a] mb-1">Tráfico proyectado / mes</div>
                <div className="font-display font-bold text-4xl text-blue-500">
                  {projectedTraffic.toLocaleString()}
                </div>
                <div className="text-xs text-blue-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +{Math.round((projectedTraffic / visitors - 1) * 100)}% vs. actual
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              <div>
                <div className="text-sm text-[#3a5a7a] mb-1">Conversiones estimadas / mes</div>
                <div className="font-display font-bold text-4xl text-blue-700">
                  {projectedConversions.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">Potenciales clientes nuevos cada mes</div>
              </div>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Quiero estos resultados
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
