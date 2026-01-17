type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode
  className?: string
}

const styles = {
  h1: 'text-4xl font-semibold leading-tight',
  h2: 'text-3xl font-semibold leading-snug',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
}

export function Heading({
  as = 'h2',
  children,
  className = '',
}: HeadingProps) {
  const Component = as

  return (
    <Component className={`${styles[as]} ${className}`}>
      {children}
    </Component>
  )
}
