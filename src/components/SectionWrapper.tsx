import { HTMLAttributes, forwardRef } from 'react';

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, className = '', children, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={`section ${className}`}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
);

SectionWrapper.displayName = 'SectionWrapper';