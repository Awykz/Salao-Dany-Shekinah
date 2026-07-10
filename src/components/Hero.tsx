import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-50 via-blush-50 to-warm-50"
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-100 rounded-full opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-blush-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Beleza · Acolhimento · Estilo
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-900 leading-tight mb-6">
              Seu momento de{' '}
              <span className="text-rose-600 italic">brilho</span> começa aqui.
            </h1>
            <p className="text-warm-500 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Transformamos seu visual com cuidado, técnica e uma experiência
              acolhedora em cada atendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/+5521980189546"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-rose-200 hover:shadow-rose-300 transition-all duration-200"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border-2 border-rose-200 text-rose-600 hover:bg-rose-50 font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Ver preços
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-blush-300 rounded-3xl rotate-3 opacity-40" />
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salão de beleza Dany Shekinah — cliente recebendo tratamento"
                className="relative rounded-3xl object-cover w-full aspect-[4/5] shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-rose-600 font-bold text-2xl font-display">+500</p>
                <p className="text-warm-500 text-xs">clientes satisfeitas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-warm-400 hover:text-rose-500 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
