import { Instagram, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#fotos', label: 'Fotos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#localizacao', label: 'Localização' },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-warm-900 text-warm-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-semibold text-white mb-3">
              Dany Shekinah
            </p>
            <p className="text-sm leading-relaxed mb-5 text-warm-400">
              Seu espaço de beleza em Queimados – RJ. Atendimento personalizado
              com carinho e profissionalismo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/+5521980189546"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-warm-800 hover:bg-rose-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone size={15} />
              </a>
              <a
                href="https://instagram.com/danyshekinah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-warm-800 hover:bg-rose-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Navegação</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-warm-400 hover:text-rose-400 transition-colors duration-150"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contato</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-warm-400">
                <MapPin size={15} className="text-rose-400 mt-0.5 flex-shrink-0" />
                <span>Rua Borja Reis, 139, São Jorge, Queimados – RJ</span>
              </div>
              <a
                href="https://wa.me/+5521980189546"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-warm-400 hover:text-rose-400 transition-colors"
              >
                <Phone size={15} className="text-rose-400 flex-shrink-0" />
                (21) 98018-9546
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warm-500">
          <p>© {new Date().getFullYear()} Salão Dany Shekinah. Todos os direitos reservados.</p>
          <p>Desenvolvido com carinho.</p>
        </div>
      </div>

      {/* Fixed WhatsApp bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-warm-900/95 backdrop-blur-sm border-t border-warm-800 px-4 py-3 flex items-center justify-between sm:hidden">
        <div>
          <p className="text-white text-xs font-semibold">Fale conosco</p>
          <p className="text-warm-400 text-xs">(21) 98018-9546</p>
        </div>
        <a
          href="https://wa.me/+5521980189546?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
