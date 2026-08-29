import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
  href?: string;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      glowing = false,
      href,
      external,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'relative inline-flex items-center justify-center gap-2 font-medium tracking-widest uppercase text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none';

    const sizeClasses = {
      sm: 'h-8 px-4 text-[10px]',
      md: 'h-11 px-6 text-xs',
      lg: 'h-13 px-8 text-sm',
    };

    const variantClasses = {
      primary:
        'bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] active:scale-95',
      secondary:
        'bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] active:scale-95',
      ghost: 'text-white hover:text-cyan-400 hover:bg-white/5 active:scale-95',
      outline:
        'border border-white/20 text-white hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 active:scale-95',
    };

    const glowClass = glowing
      ? variant === 'primary'
        ? 'shadow-[0_0_15px_rgba(0,212,255,0.3)]'
        : 'shadow-[0_0_15px_rgba(124,58,237,0.3)]'
      : '';

    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${glowClass} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={classes}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileTap={{ scale: 0.95 }}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type ?? 'button'}
        aria-label={props['aria-label']}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
