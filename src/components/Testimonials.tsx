import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Luiza',
    service: 'Coloração',
    text: 'Amei o resultado! A Dany entendeu exatamente o que eu queria. Fui para fazer luzes e saí completamente apaixonada. Super recomendo!',
    stars: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Fernanda Costa',
    service: 'Unhas em Gel',
    text: 'Meu gel durou mais de 3 semanas perfeito. Atendimento excelente, ambiente limpo e cheiroso. Já sou cliente fixa!',
    stars: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Juliana Mendes',
    service: 'Progressiva',
    text: 'Primeira vez fazendo progressiva e fiquei impressionada. Cabelo sedoso, sem cheiro forte. A qualidade dos produtos é incrível.',
    stars: 5,
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Carla Souza',
    service: 'Design de Sobrancelha',
    text: 'Minha sobrancelha sempre foi meu complexo. Saí com o rosto completamente transformado — finalmente gostei do meu próprio rosto!',
    stars: 5,
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Patricia Lima',
    service: 'Hidratação',
    text: 'Cabelo estava muito danificado. Depois do tratamento de hidratação meu cabelo ficou macio, brilhoso e com muito menos frizz.',
    stars: 4,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Mariana Rocha',
    service: 'Corte + Escova',
    text: 'Lugar aconchegante, equipe super simpática e preço justo. Voltarei sempre! O corte ficou exatamente como eu sonhava.',
    stars: 5,
    avatar: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-pad bg-warm-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            O que nossas clientes dizem
          </h2>
          <p className="text-warm-500 max-w-xl mx-auto">
            A satisfação das nossas clientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.stars ? 'fill-rose-400 text-rose-400' : 'text-warm-200'}
                  />
                ))}
              </div>
              <p className="text-warm-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-warm-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-warm-800 text-sm">{t.name}</p>
                  <p className="text-rose-400 text-xs">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
