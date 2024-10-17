import { RiArrowDownCircleFill } from "react-icons/ri"

interface AcBtnProps {
  titulo: string
  estaAbierto: boolean
  onClick: () => void
  ariaExpanded: boolean
  ariaControls: string
}

export const AcBtn: React.FC<AcBtnProps> = ({ 
  titulo, 
  estaAbierto, 
  onClick, 
  ariaExpanded, 
  ariaControls 
}) => {
  return (
    <button
      className="w-full flex md:text-xl text-md text-pretty justify-between items-center py-4 px-6 text-left font-medium transition-all duration-300 ease-in-out focus:outline-none bg-slate-950 text-primary-foreground hover:bg-orange-500/90"
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {titulo}
      <RiArrowDownCircleFill
        className={`size-8 text-blue-500 transition-transform duration-200 ${
          estaAbierto ? 'transform rotate-180 text-orange-300' : ''
        }`}
      />
    </button>
  )
}