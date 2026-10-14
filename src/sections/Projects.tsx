import { trackProjectView } from '../hooks/useAnalytics';

const projects = [
  {
    title: 'Agente Inteligente para "Cuarenta"',
    description: 'Arquitectura de agente IA avanzado enfocado en razonamiento y ejecución de tareas complejas.',
    tech: ['Python', 'LangGraph', 'LLMs', 'FastAPI'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmx0G0gh_LGWBMCqvyBW1oMGdasltFOkLndhSTysIBmqRM74aBQzH6KGapVcwyoA4op9KOfRlOo_vdNZL6nFRxO9tl_5t-utc-KFj11lsHsexgSKBzrZoy3i2mez2S16k6EekkgNlfYDXqM8SQBCKmdAXu9caaLvXo2c1qLBhKqqczzkt41qS4fVr4wGJ2x3vvuHDorTOX8VuwDlH4WqqEJM9j7IZ9Lg8NncR0GkzmwKU_LwF8agCI',
  },
  {
    title: 'Kali: Sistema de Gestión Financiera',
    description: 'Plataforma Full-Stack Multi-tenant diseñada para el control financiero con alta disponibilidad.',
    tech: ['FastAPI', 'Supabase', 'Next.js'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBHtI3WK3CM3S5WEU3UmL_ye4jQcSaYq4gJpcgNnEHgIS3DF4lmsG-KK8y3SSMkMOg58oJrR9Xcs9k8aPnqUTpzjvtC3ac0ayzRJZylFMjzqUoqQl-J961adFv-DC4tMpikh_GgMQeTCsWi0ozKj30mvnxb3GZKM7EShSd3Evy_l_yIZPzn_qaphm2cDQD12AY7V6xAvRkN-B_GibdyEPuJjeDPF1o7UaoD-m24OzfFcHxwGSpI7p',
  },
  {
    title: 'Agente Emma: Recepcionista SaaS',
    description: 'Solución IA conversacional integrada en un modelo SaaS para automatizar la atención al cliente.',
    tech: ['Python', 'LangChain', 'Supabase'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7FprOSKNnEIa3MuKSFO3O8zwOEPZaysjH5Ho0v4RrycqFJ-_rOWh-VG7pkXuHLMH_TvDFiRqUHvZ-EN8I4x8UZ-V6wNJSHGeAjtbzUrW9KZeDW1-a42P-Q585cxYa7DXwQib19hSv2YDdEQuEDB_bWZPTO3Yz5gxN2TlfWPEnq64vXp7ROqhMwHgfqmGJyLcBxkrHARPs4fGyIgUb6k9omzaGzUvqdFVJSGv_dZoseIbbuHfGVo7I',
  },
  {
    title: 'Mandify Bot',
    description: 'Sistema automatizado para logística freelance con programación robusta de tareas.',
    tech: ['Python', 'APScheduler', 'PostgreSQL'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIhs0reOju_zGRts_ObYkDy4u-iQ-QeILEMaVIqO5aM1VizGIq2ZTKMxy_Ukp5t1GXwmvRBS_Z-vRiQHw3h46PTKEnHVWdne_VAyZUX-xAw3YQ5YlA3Gz05gMBZ_rBMrQYDCTLUukHznC8k5XW33x7lLnoJXkfrpTWd-Ujw__pA1HuX1zM9GF2R8VO3Zc1-2RZ6OKl-aWxhMq5GxMiO67pHuBlWg7pTIua9bcT3ATnZ3276-LCPeaY',
  },
];

const fallbackImage = projects[0].image;

export function Projects() {
  return (
    <section id="projects" className="w-full max-w-container-max mx-auto px-4 sm:px-gutter py-12 md:py-xl">
      <div className="mb-10 md:mb-12 max-w-3xl">
        <span className="block font-label-md text-label-md text-secondary mb-1 uppercase tracking-widest">04. Portafolio</span>
        <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-primary mb-4">
          Proyectos destacados.
        </h2>
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
          Una selección de sistemas, plataformas y agentes en los que he aplicado principios de ingeniería de software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bento-card rounded-xl overflow-hidden flex flex-col group"
          >
            <div className="h-48 sm:h-52 w-full relative overflow-hidden bg-surface-container-highest flex items-center justify-center border-b border-[#d1fae5]/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/50 to-transparent pointer-events-none" aria-hidden="true" />
            </div>
            <div className="p-6 lg:p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">{project.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="font-code-sm text-code-sm px-2.5 py-1 bg-surface-container-low border border-secondary/20 text-secondary rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  trackProjectView(project.title);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="self-start inline-flex items-center gap-2 font-label-md text-label-md text-primary-container hover:text-secondary transition-colors group/btn"
              >
                Consultar sobre este proyecto
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
