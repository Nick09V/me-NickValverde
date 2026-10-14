const featuredImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCPZwM_MtPQ861MJpdFZK-CtBXvwddHw3cFWhbWIZ2Ao4Bps1FnhoZoJdoc0MRzV0RcovlGrCdJ7T18yvGZ3HC-GZFV6lucq9Ew3kaNpa7LQtnw5rG6jT5QzG-pE8NupIr9YQhAUCcpZ7-PSbWccdK6gWDYwFjiFYGO5BVv3PjIxQKbJC7fIy1JC_lDKo1RoBUA8bgCRx8cPjvXqwcKeNI5kpGWdFmyEhcjwZfPUyGICOfnw-JPaVCO",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDQjHkCGpWGmsq3irxXl3L7MoWzNUkW9KPHGyVy9wWrmG0aRxnGjgHaaPs0tmKTa134Y7V6Er5BaRzj0tS0jAMrFbsdF5gThkYv45Fk6HxMPzYyMEGYv9XXFu1D9GeE6n3bAwzj7JcDPutMnUBpJeKlLhp5HwlpXu_v4rHUxWsuAvi2Jt0WHLvItiQADiqrUk0_HVcUepjvou2AcmpWcJ3ZLtovJ1910DBa7E7olk4r53SLkVy_BnzZ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAgyA2O6rTq3w3ou4fpQPWu_W0CDxOzNqayOrHLfB3-fnB4D2_TkDZ3sf8hFhlJJ1NBtUvzad1ms376c0q3b_pJGClTWR4jJFh_pCfpyx-YwNwySL0TgzuD4ReWuNlnfhCHYxqiI-beEvpxMeg-mSnZBUx3P7gKYifJpnPgbptWIAFy8FPMFDR7CR8qgKdtJP7GCA75oD0xelrfbymy0w_Mh3xOOc19i7eYgWqlnzDy_JMFghovF8mr",
];

export function Home() {
  return (
    <section id="home" className="relative isolate w-full pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-[110px] md:pb-xl overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" aria-hidden="true" />
      <div className="max-w-container-max mx-auto px-4 sm:px-gutter relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d1fae5]/40 border border-[#d1fae5] rounded-full text-primary font-code-sm text-code-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" aria-hidden="true" />
            <span>Status: Available for work</span>
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-headline-xl text-on-surface mb-2">
            Nick Valverde.
          </h1>
          <h2 className="font-headline-lg text-xl sm:text-2xl md:text-headline-lg text-primary-container mb-4">
            Software Engineer en formación.
          </h2>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
            Desarrollo soluciones de software enfocadas en backend, integración de inteligencia artificial, automatización de procesos y diseño de sistemas escalables.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:text-on-primary font-label-md text-label-md px-6 py-3 rounded ambient-shadow hover:bg-[#10b981] transition-colors duration-300"
            >
              Ver proyectos
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-secondary text-secondary hover:text-primary font-label-md text-label-md px-6 py-3 rounded hover:bg-[#10b981]/10 transition-colors duration-300"
            >
              Contactarme
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-code-sm text-code-sm text-on-surface-variant">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">code</span> GitHub
            </a>
            <span className="text-outline-variant" aria-hidden="true">·</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">link</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeAbout() {
  return (
    <section id="home-about" className="py-12 md:py-xl px-4 sm:px-gutter max-w-container-max mx-auto border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter items-center">
        <div className="md:col-span-5">
          <span className="block font-label-md text-label-md text-secondary mb-1 uppercase tracking-widest">01.</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-on-surface mb-2">Sobre mí.</h2>
        </div>
        <div className="md:col-span-7">
          <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
            Soy estudiante de Ingeniería de Software interesado en el desarrollo de soluciones tecnológicas eficientes. Mi enfoque principal está en construir arquitecturas sólidas que soporten aplicaciones complejas, optimizando procesos a través de la automatización y explorando las capacidades de la IA aplicada.
          </p>
          <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:text-[#10b981] transition-colors">
            Conocer más sobre mí <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomeSpecialties() {
  return (
    <section id="specialties" className="py-12 md:py-xl bg-surface-container-low px-4 sm:px-gutter border-y border-outline-variant/30 w-full">
      <div className="max-w-container-max mx-auto">
        <div className="mb-8">
          <span className="block font-label-md text-label-md text-secondary mb-1 uppercase tracking-widest">01. Áreas de Enfoque</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-on-surface">Especialidades.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bento-card p-6 rounded-xl flex flex-col h-full">
            <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined" aria-hidden="true">database</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Backend</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Diseño e implementación de APIs robustas y gestión de bases de datos relacionales y NoSQL.
            </p>
          </div>

          <div className="bento-card p-6 rounded-xl flex flex-col h-full md:col-span-2 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" aria-hidden="true" />
            <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined" aria-hidden="true">smart_toy</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">AI & Automatización</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
              Integración de modelos de lenguaje, flujos de trabajo automatizados y scripts de optimización para reducir tareas repetitivas.
            </p>
          </div>

          <div className="bento-card p-6 rounded-xl flex flex-col h-full md:col-span-2">
            <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined" aria-hidden="true">architecture</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Arquitectura</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
              Estructuración de sistemas escalables, microservicios y patrones de diseño limpios.
            </p>
          </div>

          <div className="bento-card p-6 rounded-xl flex flex-col h-full">
            <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined" aria-hidden="true">analytics</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Data</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Procesamiento, análisis y estructuración de datos para toma de decisiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturedProjects() {
  const projects = [
    {
      title: 'API_Gateway_Service',
      description: 'Servicio centralizado para enrutamiento y autenticación de microservicios con soporte para rate limiting.',
      tech: ['Go', 'Docker', 'Redis'],
      image: featuredImages[0],
      alt: 'Dashboard data visualization',
    },
    {
      title: 'LLM_Doc_Processor',
      description: 'Pipeline automatizado para extracción, categorización y resumen de documentos técnicos utilizando IA.',
      tech: ['Python', 'OpenAI', 'PostgreSQL'],
      image: featuredImages[1],
      alt: 'AI neural networks',
    },
    {
      title: 'Automated_CI_CD',
      description: 'Infraestructura como código para despliegues automatizados y pruebas de integración continuas.',
      tech: ['Terraform', 'AWS', 'Actions'],
      image: featuredImages[2],
      alt: 'Backend code',
    },
  ];

  return (
    <section id="home-projects" className="py-12 md:py-xl px-4 sm:px-gutter max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
        <div>
          <span className="block font-label-md text-label-md text-secondary mb-1 uppercase tracking-widest">03.</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-on-surface">Proyectos Destacados.</h2>
        </div>
        <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="self-start md:self-auto inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:text-[#10b981] border-b border-primary hover:border-[#10b981] pb-1 transition-colors">
          Ver todos <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((p) => (
          <article key={p.title} className="bento-card rounded-xl overflow-hidden flex flex-col">
            <div className="h-48 bg-surface-container-lowest relative overflow-hidden border-b border-[#d1fae5]/60">
              <img src={p.image} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline-md text-lg text-on-surface mb-2 font-mono break-words">{p.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-[#10b981]/10 border border-[#10b981]/20 font-code-sm text-code-sm text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HomeNextSteps() {
  return (
    <section id="home-next-steps" className="py-12 md:py-xl px-4 sm:px-gutter max-w-container-max mx-auto text-center border-t border-outline-variant/30">
      <span className="block font-label-md text-label-md text-secondary mb-2 uppercase tracking-widest">04. Next Steps</span>
      <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-on-surface mb-4">¿Hablamos?</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mb-6">
        Actualmente estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres conectar, mi bandeja de entrada está abierta.
      </p>
      <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:text-on-primary font-label-md text-label-md px-8 py-3 rounded ambient-shadow hover:bg-[#10b981] transition-colors">
        Contactarme <span className="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
      </a>
    </section>
  );
}
