import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export default function Card({
  children,
  className = '',
  hover = true,
  gradient = false,
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700
        ${hover ? 'card-hover' : ''}
        ${gradient ? 'gradient-border' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-6 pt-0 border-t border-dark-700 ${className}`}>
      {children}
    </div>
  )
}
