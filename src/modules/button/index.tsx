import { ReactNode } from "react"

interface EpicButtonProps {
  children: ReactNode
  height?: number
}

export default function EpicButton({ children, height = 40 }: EpicButtonProps) {
  return (
    <button
      className={`
        btn_epic 
        uppercase text-xs text-white 
        border border-solid border-white/15 
        backdrop-blur-xl bg-black/30 
        w-auto
      `}
      style={{
        ["--btn_epic_height" as any]: `${height}px`,
      }}
    >
      <span className="px-6" aria-hidden="true">
        {children}
      </span>
    </button>
  )
}
