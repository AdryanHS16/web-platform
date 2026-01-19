type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode
  className?: string
}

const styles = {
  h1: `font-heading text-5xl md:text-6xl font-semibold leading-[1.05]`,
  h2: `font-heading text-3xl md:text-4xl font-semibold`,
  h3: `font-heading text-xl font-medium`,
  h4: `font-heading text-lg font-medium`,
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
