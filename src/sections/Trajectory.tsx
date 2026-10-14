const timelineItems = [
  {
    year: '2026 - Futuro',
    title: 'Hitos de Proyectos',
    description: 'Escalamiento y lanzamientos principales de iniciativas técnicas en curso, con enfoque en automatización impulsada por IA y arquitecturas multi-agente.',
    tags: ['Agente Cuarenta', 'Kalibot', 'Emma'],
  },
  {
    year: '2025 - Actualidad',
    title: 'Experiencia Freelance & Desarrollo',
    description: 'Desarrollo de soluciones de software a medida para diversos clientes, priorizando arquitecturas escalables, APIs robustas y buenas prácticas de código limpio.',
    tags: ['Mandify', 'Full-Stack Dev', 'Backend'],
  },
  {
    year: '2022 - Actualidad',
    title: 'Ingeniería de Software @ EPN',
    description: 'Formación universitaria en Ingeniería de Software en la Escuela Politécnica Nacional, consolidando bases sólidas en ciencias de la computación y diseño de sistemas.',
    tags: ['Algorithms', 'System Design', 'Databases'],
  },
];

export function Trajectory() {
  return (
    <section id="trajectory" className="w-full bg-surface-container-low border-y border-outline-variant/30 py-12 md:py-xl px-4 sm:px-gutter">
      <div className="max-w-container-max mx-auto">
        <div className="mb-10 md:mb-12">
          <span className="block font-label-md text-label-md text-secondary mb-1 uppercase tracking-widest">05. Experiencia & Educación</span>
          <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-primary mb-4">
            Trayectoria.
          </h2>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Línea de tiempo de mis hitos profesionales y académicos, reflejando aprendizaje continuo y evolución técnica.
          </p>
        </div>

        <div className="relative ml-2 sm:ml-3 pl-6 md:pl-10 border-l-2 border-outline-variant pb-2">
          {timelineItems.map((item) => (
            <div key={item.year} className="relative mb-8 sm:mb-10 last:mb-0 group">
              <div
                className="absolute -left-[33px] md:-left-[49px] top-6 w-4 h-4 bg-primary-container border-2 border-surface-bright rounded-full z-10 group-hover:scale-125 group-hover:bg-secondary transition-all duration-300"
                aria-hidden="true"
              />
              <div className="bento-card p-5 sm:p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-code-sm text-code-sm bg-surface-container-low text-primary-container px-2.5 py-1 rounded border border-secondary/20">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-code-sm text-code-sm bg-surface-container px-2.5 py-1 rounded text-on-surface-variant border border-outline-variant/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
