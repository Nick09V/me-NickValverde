import { HTMLAttributes, forwardRef } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'default', size = 'md', children, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed)] border-[var(--color-border)]',
      success: 'bg-green-100 text-green-800 border-green-200',
      warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      error: 'bg-red-100 text-red-800 border-red-200',
      info: 'bg-blue-100 text-blue-800 border-blue-200'
    }[variant];

    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm'
    }[size];

    return (
      <span
        ref={ref}
        className={`inline-flex items-center font-label font-medium rounded-full border ${variantClasses} ${sizeClasses} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';