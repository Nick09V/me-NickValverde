export function Footer() {
  return (
    <footer className="bg-surface-dim border-t border-outline-variant mt-auto w-full" role="contentinfo">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-gutter py-6 max-w-container-max mx-auto gap-4 text-center md:text-left">
        <div className="font-label-md text-label-md text-on-surface">
          © {new Date().getFullYear()} Nick Valverde. Engineered for performance.
        </div>
        <nav className="flex flex-wrap justify-center items-center gap-6" aria-label="Enlaces sociales">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors">
            LinkedIn
          </a>
          <a href="mailto:hello@nickvalverde.com" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
