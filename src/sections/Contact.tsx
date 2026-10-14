import { useState, FormEvent } from 'react';
import { trackContactClick } from '../hooks/useAnalytics';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag!('event', 'contact_form_submit', {
        event_category: 'Contact',
        event_label: 'Contact Form',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="w-full max-w-container-max mx-auto px-4 sm:px-gutter py-12 md:py-xl">
      <div className="mb-10 md:mb-12">
        <span className="block font-label-md text-label-md text-secondary mb-1 uppercase tracking-widest">06. Contacto</span>
        <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-primary mb-2">
          Hablemos.
        </h2>
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Estoy abierto a oportunidades profesionales, pasantías y colaboraciones. Si tienes un proyecto en mente o simplemente quieres conectar, mi bandeja de entrada está abierta.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-[#d1fae5]">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-secondary-container/40 flex items-center justify-center mx-auto mb-4 text-secondary">
                <span className="material-symbols-outlined text-[32px]" aria-hidden="true">check</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">¡Mensaje enviado!</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Gracias por contactarme. Te responderé lo antes posible.</p>
              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="inline-flex items-center justify-center font-label-md text-label-md border border-primary-container text-primary-container px-6 py-2.5 rounded hover:bg-surface-container transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className={`w-full bg-[#f8fafc] text-on-surface border rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-body-md text-body-md transition-all ${errors.name ? 'border-error' : 'border-outline-variant'}`}
                  required
                  autoComplete="name"
                />
                {errors.name && <span className="font-code-sm text-code-sm text-error">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Correo Electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={`w-full bg-[#f8fafc] text-on-surface border rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-body-md text-body-md transition-all ${errors.email ? 'border-error' : 'border-outline-variant'}`}
                  required
                  autoComplete="email"
                />
                {errors.email && <span className="font-code-sm text-code-sm text-error">{errors.email}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿En qué puedo ayudarte?"
                  rows={5}
                  className={`w-full bg-[#f8fafc] text-on-surface border rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-body-md text-body-md resize-y transition-all ${errors.message ? 'border-error' : 'border-outline-variant'}`}
                  required
                />
                {errors.message && <span className="font-code-sm text-code-sm text-error">{errors.message}</span>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto sm:self-start justify-center bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-[#10b981] transition-colors flex items-center gap-2 ambient-shadow disabled:opacity-60"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </button>
              {submitStatus === 'error' && <p className="text-center text-error font-code-sm" role="alert">Error al enviar el mensaje. Inténtalo de nuevo.</p>}
            </form>
          )}
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="bento-card p-6 rounded-xl">
            <h3 className="font-headline-md text-headline-md text-primary mb-4 border-b border-outline-variant/60 pb-2.5">
              Conecta Conmigo
            </h3>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:hello@nickvalverde.com"
                onClick={() => trackContactClick('email')}
                className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors group min-w-0"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container" aria-hidden="true">mail</span>
                </div>
                <span className="font-body-md text-body-md break-all sm:break-normal">hello@nickvalverde.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick('linkedin')}
                className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors group min-w-0"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container" aria-hidden="true">link</span>
                </div>
                <span className="font-body-md text-body-md">LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick('github')}
                className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors group min-w-0"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container" aria-hidden="true">code</span>
                </div>
                <span className="font-body-md text-body-md">GitHub Repository</span>
              </a>
            </div>
          </div>

          <div className="bento-card p-6 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[26px]" aria-hidden="true">location_on</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1">Ubicación Actual</h3>
              <p className="font-body-md text-body-md text-on-surface">San José, Costa Rica</p>
              <p className="font-code-sm text-code-sm text-on-surface-variant mt-1">UTC-6 / CST · Remoto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
