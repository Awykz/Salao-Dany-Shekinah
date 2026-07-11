import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="localizacao" className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Onde estamos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Localização
          </h2>
          <p className="text-warm-500 max-w-xl mx-auto">
            Venha nos visitar! Estamos prontas para receber você em um ambiente
            acolhedor e especializado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-warm-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-warm-800 text-sm mb-1">Endereços</p>
                  <p className="text-warm-500 text-sm leading-relaxed">
                    Rua Borja Reis, 139, São Jorge, Queimados – RJ, CEP 26181-390
                  </p>
                  <p className="text-warm-500 text-sm leading-relaxed mt-2">
                    Av. das Américas, 12.300, Sala 125, Condomínio Blue Center Mall - Barra da Tijuca - RJ
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-warm-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-semibold text-warm-800 text-sm mb-2">Horário de Atendimento</p>
                  <div className="space-y-1 text-sm text-warm-500">
                    <div className="flex justify-between gap-6">
                      <span>Seg – Sex</span>
                      <span className="font-medium text-warm-700">09h – 19h</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Sábado</span>
                      <span className="font-medium text-warm-700">09h – 17h</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Domingo</span>
                      <span className="font-medium text-rose-500">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-warm-50 rounded-2xl p-6 space-y-3">
              <a
                href="https://wa.me/+5521980189546"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-warm-600 hover:text-rose-600 transition-colors group"
              >
                <Phone size={16} className="text-rose-400 group-hover:text-rose-600" />
                (21) 98018-9546
              </a>
              <a
                href="https://instagram.com/danyshekinah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-warm-600 hover:text-rose-600 transition-colors group"
              >
                <Instagram size={16} className="text-rose-400 group-hover:text-rose-600" />
                @danyshekinah
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-md border border-warm-100 h-80 lg:h-full min-h-72">
              <iframe
                title="Localização Salão Dany Shekinah"
                src="https://www.google.com/maps?q=Rua+Borja+Reis+139+S%C3%A3o+Jorge+Queimados+RJ&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
