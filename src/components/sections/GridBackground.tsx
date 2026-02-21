import type { CSSProperties } from 'react'

const maskImage = `
  radial-gradient(35% 25% at 50% 68.3%, #000 0%, rgba(0, 0, 0, 0) 100%),
  radial-gradient(39% 25% at 50% 1.3%, #000 0%, rgba(0, 0, 0, 0) 100%),
  radial-gradient(35% 25% at 11.7% 94.3%, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%),
  radial-gradient(35% 25% at 91.2% 90.9%, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)
`

const gridStyle = {
  width: '100%',
  height: '756px',
  display: 'block',
  overflow: 'hidden',
  backgroundImage: "url('/img/background-hero.png')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '0px',
  opacity: 0.12,
  WebkitMaskImage: maskImage,
  maskImage: maskImage,
  WebkitMaskComposite: 'add, add, add, add',
  maskComposite: 'add, add, add, add',
} as CSSProperties

export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div style={gridStyle} />
    </div>
  )
}