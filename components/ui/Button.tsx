import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonBaseProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants = {
  primary:
    'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
  secondary:
    'bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-500 hover:to-secondary-400 text-white shadow-lg shadow-secondary-500/25 hover:shadow-secondary-500/40',
  outline:
    'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400',
  ghost: 'text-dark-300 hover:text-white hover:bg-dark-800',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink
    return (
      <a href={href} className={baseClasses} {...linkProps}>
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
