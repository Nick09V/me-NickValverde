import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', padding = 'md', children, ...props }, ref) => {
    const variantClasses = {
      default: 'card',
      elevated: 'card shadow-md',
      outlined: 'card border-2'
    }[variant];

    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }[padding];

    return (
      <div
        ref={ref}
        className={`${variantClasses} ${paddingClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';