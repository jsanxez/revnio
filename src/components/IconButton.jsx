import "../styles/Icon-button.css"
import '../styles/Outlined-icon.css'
import '../styles/Tonal-icon.css'
import '../styles/Filled-icon.css'

export default function IconButton({iconName, variant, selected}) {
  const state = selected ? '--selected' : '';
  return(
    <button className={`icon-button ${variant}-icon ${state}`}>
      <span className="material-symbols-outlined">
        {iconName}
      </span>
    </button>
  )
}
