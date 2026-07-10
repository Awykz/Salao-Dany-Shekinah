import { useState } from 'react';
import { X } from 'lucide-react';

const photos = [
  {
    src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Coloração de cabelo',
    tag: 'Coloração',
  },
  {
    src: 'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Escova e finalização',
    tag: 'Escova',
  },
  {
    src: 'https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Manicure gel',
    tag: 'Unhas',
  },
  {
    src: 'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Hidratação capilar',
    tag: 'Tratamento',
  },
  {
    src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Design de sobrancelha',
    tag: 'Sobrancelha',
  },
  {
    src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corte feminino moderno',
    tag: 'Corte',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="fotos" className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Galeria
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-warm-500 max-w-xl mx-auto">
            Cada resultado é único, pensado para valorizar a beleza natural de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setActive(i);
              }}
              className="group relative rounded-2xl overflow-hidden aspect-square focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
              aria-label={`Ver foto: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{p.tag}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-rose-300 transition-colors"
            aria-label="Fechar"
            onClick={() => setActive(null)}
          >
            <X size={28} />
          </button>
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-w-3xl w-full max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/80 text-sm">{photos[active].tag}</p>
        </div>
      )}
    </section>
  );
}
