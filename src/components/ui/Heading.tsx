type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode
  className?: string
}

const styles = {
  h1: 'text-5xl md:text-6xl font-semibold leading-[1.1]',
  h2: 'text-3xl md:text-4xl font-semibold leading-tight',
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
