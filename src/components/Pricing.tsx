import { Check } from 'lucide-react';

const categories = [
  {
    title: 'Cabelo',
    icon: '✂️',
    services: [
      { name: 'Corte Feminino', price: 'R$ 60' },
      { name: 'Corte Masculino', price: 'R$ 30' },
      { name: 'Coloração', price: 'A partir de R$ 120' },
      { name: 'Luzes / Balayage', price: 'A partir de R$ 180' },
      { name: 'Escova Progressiva', price: 'A partir de R$ 150' },
      { name: 'Hidratação', price: 'R$ 60' },
      { name: 'Botox Capilar', price: 'A partir de R$ 100' },
    ],
  },
  {
    title: 'Unhas',
    icon: '💅',
    highlight: true,
    services: [
      { name: 'Manicure', price: 'R$ 30' },
      { name: 'Pedicure', price: 'R$ 35' },
      { name: 'Gel / Fibra de Vidro', price: 'A partir de R$ 100' },
      { name: 'Nail Art (por unha)', price: 'A partir de R$ 5' },
      { name: 'Esmaltação em Gel', price: 'R$ 50' },
      { name: 'Mão + Pé (combo)', price: 'R$ 60' },
    ],
  },
  {
    title: 'Estética Facial',
    icon: '🌸',
    services: [
      { name: 'Design de Sobrancelha', price: 'R$ 20' },
      { name: 'Henna de Sobrancelha', price: 'R$ 40' },
      { name: 'Micropigmentação', price: 'Consultar' },
      { name: 'Limpeza de Pele', price: 'R$ 80' },
      { name: 'Brow Lamination', price: 'R$ 90' },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="servicos" className="section-pad bg-warm-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Tabela de Preços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Serviços & Valores
          </h2>
          <p className="text-warm-500 max-w-xl mx-auto">
            Transparência sempre. Confira nossos preços abaixo — consulte-nos
            pelo WhatsApp para pacotes personalizados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1 ${
                cat.highlight
                  ? 'bg-rose-600 text-white shadow-xl shadow-rose-200 ring-2 ring-rose-400'
                  : 'bg-white shadow-md shadow-warm-100'
              }`}
            >
              {cat.highlight && (
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Mais popular
                </span>
              )}
              <div className="text-2xl mb-1">{cat.icon}</div>
              <h3
                className={`font-display text-xl font-bold mb-5 ${
                  cat.highlight ? 'text-white' : 'text-warm-900'
                }`}
              >
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.services.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-3">
                    <span
                      className={`flex items-center gap-2 text-sm ${
                        cat.highlight ? 'text-rose-100' : 'text-warm-600'
                      }`}
                    >
                      <Check
                        size={13}
                        className={cat.highlight ? 'text-rose-200' : 'text-rose-400'}
                      />
                      {s.name}
                    </span>
                    <span
                      className={`text-sm font-semibold flex-shrink-0 ${
                        cat.highlight ? 'text-white' : 'text-rose-600'
                      }`}
                    >
                      {s.price}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/+5521980189546"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  cat.highlight
                    ? 'bg-white text-rose-600 hover:bg-rose-50'
                    : 'border-2 border-rose-200 text-rose-600 hover:bg-rose-50'
                }`}
              >
                Agendar agora
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-warm-400 text-xs mt-8">
          * Preços sujeitos a alteração. Consulte-nos para avaliação personalizada.
        </p>
      </div>
    </section>
  );
}
