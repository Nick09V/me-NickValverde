const aboutIllustration =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBYBMd1yiyknS-yay1GKEuRHth8b81jQt_FWv4oMDQm4hZwIf5vH-ciqiWOz6m8YoPAZhyhLk6Psk27iJ5CRXwmLkY7A3KKx04ffcfvW3Gr4QefsEpi9fECJXhfo2Anhxu7IyDUnhyCosZAHxLAEa_o2nWf4AlKVRGa7CfU-unVVWhOGHwVqDctOdRlxXOwI01eCXcE02gUNmBcPt0kI8n_owpwVm5Oyk9PScXr2eaIVeqB5_CKns4x";

export function About() {
  return (
    <section id="about" className="py-12 md:py-xl px-4 sm:px-gutter max-w-container-max mx-auto w-full">
      <div className="mb-10 md:mb-12 max-w-3xl">
        <span className="block font-label-md text-label-md text-secondary mb-1 uppercase tracking-widest">02. Sobre mí</span>
        <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-primary mb-4">
          Construyendo soluciones, aprendiendo continuamente.
        </h2>
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
          Soy estudiante de Ingeniería de Software (9no semestre) en la EPN. Mi enfoque se centra en la construcción de sistemas robustos, combinando conocimientos profundos en backend, bases de datos y el diseño de arquitecturas complejas como los sistemas multi-agente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        <div className="md:col-span-8 bento-card p-6 lg:p-8 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" aria-hidden="true">database</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">Core Engineering</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Mi formación académica y experiencia práctica me han llevado a especializarme en la capa de datos y lógica de negocio. Diseñar arquitecturas de backend eficientes y gestionar bases de datos estructuradas son el núcleo de mis proyectos.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-code-sm text-code-sm bg-surface-container-low text-primary px-3 py-1 rounded border border-secondary/20">Backend Architecture</span>
            <span className="font-code-sm text-code-sm bg-surface-container-low text-primary px-3 py-1 rounded border border-secondary/20">Relational DBs</span>
            <span className="font-code-sm text-code-sm bg-surface-container-low text-primary px-3 py-1 rounded border border-secondary/20">API Design</span>
          </div>
        </div>

        <div className="md:col-span-4 bento-card rounded-xl overflow-hidden relative min-h-[220px] sm:min-h-[250px] flex flex-col justify-end p-5 group">
          <img
            src={aboutIllustration}
            alt="Ilustración de arquitectura de software y sistemas multi-agente"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" aria-hidden="true" />
          <div className="relative z-10 flex items-center justify-between gap-2 bg-surface/95 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-[#d1fae5]">
            <span className="font-code-sm text-code-sm font-medium text-primary">EPN · 9no Semestre</span>
            <span className="material-symbols-outlined text-[18px] text-secondary shrink-0" aria-hidden="true">verified</span>
          </div>
        </div>

        <div className="md:col-span-5 bento-card p-6 lg:p-8 rounded-xl flex flex-col">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined" aria-hidden="true">smart_toy</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">Multi-Agent Systems</h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Explorando la intersección entre ingeniería de software y automatización inteligente. Desarrollo sistemas donde múltiples agentes autónomos colaboran para resolver problemas complejos de manera distribuida.
          </p>
        </div>

        <div className="md:col-span-7 bento-card p-6 lg:p-8 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" aria-hidden="true">language</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">Comunicación & Contexto Global</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Poseo un nivel de inglés C1, lo que me permite colaborar efectivamente en entornos internacionales, consumir literatura técnica de vanguardia y participar en comunidades globales de desarrollo sin barreras.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4 border-t border-outline-variant/30 mt-auto">
            <a
              href="#trajectory"
              onClick={(e) => { e.preventDefault(); document.querySelector('#trajectory')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:text-on-primary font-label-md text-label-md px-6 py-3 rounded hover:bg-[#10b981] transition-colors ambient-shadow"
            >
              Ver mi trayectoria <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-primary-container text-primary-container hover:text-primary font-label-md text-label-md px-6 py-3 rounded hover:bg-surface-container transition-colors"
            >
              Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
