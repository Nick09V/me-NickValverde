const techData = [
  { title: 'Lenguajes', icon: 'terminal', items: ['Python (Principal)', 'TypeScript', 'SQL', 'C#/Java'], span: '' },
  { title: 'Backend', icon: 'dns', items: ['FastAPI', 'Pydantic', 'REST APIs'], span: '' },
  { title: 'IA & Data', icon: 'psychology', items: ['LangGraph', 'LangChain', 'LLMs', 'Pandas', 'Scikit-learn'], span: '' },
  { title: 'Databases', icon: 'database', items: ['PostgreSQL', 'Supabase', 'Redis'], span: '' },
  { title: 'Automation & DevOps', icon: 'settings_suggest', items: ['Docker', 'Git', 'GitHub', 'APScheduler'], span: 'md:col-span-2 lg:col-span-2' },
];

export function Technologies() {
  return (
    <section id="technologies" className="py-12 md:py-xl bg-surface-container-low px-4 sm:px-gutter border-y border-outline-variant/30 w-full">
      <div className="max-w-container-max mx-auto">
        <div className="w-full mb-10 md:mb-12 text-left border-l-2 border-secondary pl-4">
          <span className="block font-label-md text-label-md text-secondary mb-1 uppercase tracking-widest">03. Stack Técnico</span>
          <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-primary mb-2">
            Tecnologías y herramientas.
          </h2>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Tecnologías que he utilizado durante mi formación y proyectos, enfocadas en ingeniería de software, IA y automatización.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techData.map((cat) => (
            <div
              key={cat.title}
              className={`bento-card rounded-xl p-6 flex flex-col gap-4 ${cat.span}`}
            >
              <div className="flex items-center gap-2.5 text-secondary">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" aria-hidden="true">{cat.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-surface-container-low border border-secondary/20 rounded-md font-code-sm text-code-sm text-primary hover:bg-surface-variant hover:border-secondary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
