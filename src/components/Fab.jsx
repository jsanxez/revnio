import '../styles/buttons.css'
import '../styles/Fab.css'

export default function Fab({ label, iconName, color='surface' }) {
  return(
    <button className={`fab --${color}`}>
      <span className="material-symbols-outlined">
        {iconName}
      </span>
      {label}
    </button>
  )
}
