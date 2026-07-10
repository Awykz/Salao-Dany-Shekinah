import { Sparkles, Heart, Award, Clock } from 'lucide-react';

const differentials = [
  {
    icon: Sparkles,
    title: 'Técnicas Exclusivas',
    text: 'Procedimentos com produtos premium e métodos modernos para resultados duradouros.',
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    text: 'Cada cliente é única. Ouvimos, analisamos e criamos o look ideal para você.',
  },
  {
    icon: Award,
    title: 'Profissionais Qualificadas',
    text: 'Equipe com formação constante e certificações nas principais técnicas do mercado.',
  },
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    text: 'Agendamento facilitado pelo WhatsApp, com opções de horários para sua rotina.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-pad bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-rose-100 rounded-3xl -rotate-2 opacity-60" />
            <img
              src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Interior do Salão Dany Shekinah"
              className="relative rounded-3xl object-cover w-full aspect-square shadow-xl"
            />
            <div className="absolute -top-5 -right-5 bg-rose-600 text-white rounded-2xl px-5 py-4 shadow-lg">
              <p className="font-bold text-2xl font-display">8+</p>
              <p className="text-rose-100 text-xs">anos de experiência</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Sobre nós
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-900 mb-5 leading-snug">
              Um espaço criado com amor para realçar a sua beleza.
            </h2>
            <p className="text-warm-500 leading-relaxed mb-5">
              O Salão Dany Shekinah nasceu do sonho de oferecer um atendimento de
              alto nível em um ambiente acolhedor e inspirador. Localizado em
              Queimados – RJ, atendemos com dedicação cada cliente que passa pela
              nossa porta.
            </p>
            <p className="text-warm-500 leading-relaxed mb-10">
              Nossa missão é ir além da estética — queremos que você saia se
              sentindo confiante, renovada e radiante. Do corte à coloração,
              cuidamos de cada detalhe com carinho.
            </p>

            {/* Differentials grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {differentials.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-800 text-sm mb-0.5">{title}</p>
                    <p className="text-warm-400 text-xs leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
