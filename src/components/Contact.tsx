import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, MessageCircle, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const WHATSAPP_NUMBER = '34600000000';

const businessTypes = [
  'E-commerce / Tienda online',
  'Servicios profesionales',
  'Restaurante / Hostelería',
  'Salud y clínica',
  'Corporativo / B2B',
  'Otro',
];

const goalOptions = [
  { id: 'web', label: 'Nueva web' },
  { id: 'seo', label: 'Mejorar SEO' },
  { id: 'traffic', label: 'Más tráfico' },
  { id: 'maintenance', label: 'Mantenimiento' },
];

const budgetRanges = ['< €1.000', '€1.000 – €3.000', '€3.000 – €5.000', '> €5.000'];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    goals: [] as string[],
    budget: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const steps = ['Sobre ti', 'Tu negocio', 'Tu proyecto'];

  const toggleGoal = (id: string) => {
    setForm((prev) => ({
      ...prev,
      goals: prev.goals.includes(id) ? prev.goals.filter((g) => g !== id) : [...prev, id],
    }));
  };

  const canProceed = () => {
    if (step === 0) return form.name.trim() && form.email.trim() && /\S+@\S+\.\S+/.test(form.email);
    if (step === 1) return form.businessType && form.goals.length > 0;
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');
    const { error: insertError } = await supabase.from('leads').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      business_type: form.businessType,
      goals: form.goals,
      budget: form.budget,
      message: form.message,
    });
    setSubmitting(false);
    if (insertError) {
      setError('Algo salió mal. Inténtalo de nuevo o escríbenos por WhatsApp.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-24 px-6 bg-[#f7fbff]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-12"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#071a33] mb-3">¡Mensaje enviado!</h3>
            <p className="text-[#3a5a7a] mb-8">
              Gracias, {form.name}. Hemos recibido tu solicitud y te contactaremos en menos de 24 horas.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              También puedes escribirnos por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#f7fbff]">
      <div className="absolute inset-0 radial-glow opacity-40" />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Contacto</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-[#071a33]">
            Cuéntanos <span className="text-gradient">tu proyecto</span>
          </h2>
          <p className="text-[#3a5a7a] max-w-xl mx-auto">
            Te respondemos en menos de 24 horas. La primera auditoría es gratuita.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    i <= step
                      ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}
                >
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-sm ${i <= step ? 'text-[#071a33]' : 'text-slate-400'}`}>{s}</span>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-px ${i < step ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-slate-200'}`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div>
                  <label className="text-sm font-medium text-[#102a43] mb-2 block">Nombre *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="¿Cómo te llamas?"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#071a43] focus:border-blue-400/60 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#102a43] mb-2 block">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#071a43] focus:border-blue-400/60 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#102a43] mb-2 block">Teléfono</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#071a43] focus:border-blue-400/60 focus:outline-none transition-colors"
                  />
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div>
                  <label className="text-sm font-medium text-[#102a43] mb-2 block">Tipo de negocio *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {businessTypes.map((bt) => (
                      <button
                        key={bt}
                        onClick={() => setForm({ ...form, businessType: bt })}
                        className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                          form.businessType === bt
                            ? 'bg-gradient-to-r from-blue-500/10 to-blue-700/10 border-blue-400/40 text-blue-700'
                            : 'bg-slate-50 border-slate-200 text-[#3a5a7a] hover:border-blue-200'
                        }`}
                      >
                        {bt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#102a43] mb-2 block">¿Qué necesitas? *</label>
                  <div className="flex flex-wrap gap-2">
                    {goalOptions.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => toggleGoal(goal.id)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                          form.goals.includes(goal.id)
                            ? 'bg-gradient-to-r from-blue-500 to-blue-700 border-transparent text-white'
                            : 'bg-slate-50 border-slate-200 text-[#3a5a7a] hover:border-blue-200'
                        }`}
                      >
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div>
                  <label className="text-sm font-medium text-[#102a43] mb-2 block">Presupuesto estimado</label>
                  <div className="grid grid-cols-2 gap-3">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => setForm({ ...form, budget: range })}
                        className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                          form.budget === range
                            ? 'bg-gradient-to-r from-blue-500/10 to-blue-700/10 border-blue-400/40 text-blue-700'
                            : 'bg-slate-50 border-slate-200 text-[#3a5a7a] hover:border-blue-200'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#102a43] mb-2 block">Cuéntanos más sobre tu proyecto</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe tu negocio, tus objetivos, tu web actual..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#071a43] focus:border-blue-400/60 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <p className="text-red-500 text-sm mt-4">{error}</p>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-[#3a5a7a] hover:text-blue-500 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </button>
            ) : (
              <div />
            )}

            {step < 2 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar solicitud
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>

        {/* WhatsApp button */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm mb-4">¿Prefieres hablar directamente?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
