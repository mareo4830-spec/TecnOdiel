import { MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';

const WHATSAPP_NUMBER = '34600000000';

const footerLinks = {
  Servicios: ['Diseño Web', 'SEO', 'Visibilidad y Tráfico', 'Mantenimiento'],
  Empresa: ['Sobre nosotros', 'Proyectos', 'Contacto', 'Blog'],
  Legal: ['Aviso legal', 'Privacidad', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-100 pt-16 pb-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-display font-bold text-white text-lg">
                T
              </div>
              <span className="font-display font-bold text-xl text-[#071a33]">
                Tecn<span className="text-gradient">Odiel</span>
              </span>
            </div>
            <p className="text-[#3a5a7a] text-sm leading-relaxed mb-4">
              Tu socio de crecimiento digital. Diseño web, SEO y visibilidad online que generan resultados reales.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp directo
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-[#071a33] mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#3a5a7a] text-sm hover:text-blue-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#3a5a7a]">
            <a href="mailto:hola@tecnodiel.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Mail className="w-4 h-4" />
              hola@tecnodiel.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Huelva, España
            </span>
          </div>
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm text-[#3a5a7a] hover:text-blue-500 transition-colors"
          >
            Volver arriba
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

        <div className="text-center text-xs text-slate-400 mt-6">
          © {new Date().getFullYear()} TecnOdiel. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
