import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Inicio', href: '#home', icon: 'home' },
  { label: 'Sobre mí', href: '#about', icon: 'person' },
  { label: 'Tecnologías', href: '#technologies', icon: 'code' },
  { label: 'Proyectos', href: '#projects', icon: 'terminal' },
  { label: 'Trayectoria', href: '#trajectory', icon: 'timeline' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['#home', '#about', '#technologies', '#projects', '#trajectory', '#contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.querySelector(sectionIds[i]) as HTMLElement | null;
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 border-b transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/95 backdrop-blur-md border-outline-variant shadow-sm'
            : 'bg-surface border-outline-variant'
        }`}
        role="banner"
      >
        <div className="flex justify-between items-center px-4 sm:px-gutter max-w-container-max mx-auto h-16">
          <button
            type="button"
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:text-secondary hover:bg-surface-container transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-drawer"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="material-symbols-outlined text-[24px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>

          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="font-label-md text-base font-bold tracking-tight text-primary hover:text-secondary transition-colors"
            aria-label="Nick Valverde - Inicio"
          >
            Nick Valverde
          </a>

          <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Navegación principal">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`font-label-md text-label-md py-1 border-b-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-secondary font-bold border-secondary'
                      : 'text-on-surface-variant border-transparent hover:text-secondary'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className={`hidden md:inline-flex items-center justify-center font-label-md text-label-md rounded px-4 py-2 transition-colors cursor-pointer ${
              activeSection === '#contact'
                ? 'bg-primary-container text-on-primary'
                : 'bg-surface-container-low text-primary border border-outline-variant hover:bg-primary-container hover:text-on-primary hover:border-primary-container'
            }`}
          >
            Contacto
          </a>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg text-primary hover:text-secondary hover:bg-surface-container transition-colors"
            aria-label="Ir a Contacto"
          >
            <span className="material-symbols-outlined text-[22px]">mail</span>
          </a>
        </div>
      </header>

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed inset-y-0 left-0 w-72 max-w-[82vw] z-[60] bg-surface border-r border-outline-variant shadow-xl flex flex-col py-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-5 pb-4 mb-4 border-b border-outline-variant/50 flex items-center justify-between">
          <span className="font-headline-md text-headline-md text-primary font-bold">Navegación</span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Cerrar menú"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3 flex-1 overflow-y-auto" aria-label="Menú móvil">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`px-4 py-3 flex items-center gap-3 font-label-md text-label-md rounded-xl transition-colors ${
                  isActive
                    ? 'bg-secondary-container text-on-secondary-container font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </a>
            );
          })}
          <div className="mt-4 pt-4 border-t border-outline-variant/40">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="w-full px-4 py-3 flex items-center justify-center gap-2 font-label-md text-label-md bg-primary-container text-on-primary hover:bg-[#10b981] hover:text-on-primary rounded-xl transition-colors ambient-shadow"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">mail</span>
              Contactarme
            </a>
          </div>
        </nav>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-on-background/30 backdrop-blur-[1px] z-[55] transition-opacity md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
