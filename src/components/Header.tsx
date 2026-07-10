import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#fotos', label: 'Fotos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#inicio"
            className="font-display text-xl font-semibold text-rose-600 tracking-wide"
          >
            Dany Shekinah
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-warm-600 hover:text-rose-600 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/+5521980189546"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
          >
            <Phone size={14} />
            Agendar
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-warm-600 hover:text-rose-600 transition-colors"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden bg-white border-t border-warm-100 transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="py-2.5 px-3 rounded-lg text-sm font-medium text-warm-700 hover:bg-rose-50 hover:text-rose-600 transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/+5521980189546"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-3 flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium py-3 rounded-full transition-colors duration-200"
          >
            <Phone size={14} />
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
