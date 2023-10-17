import '../styles/Button.css'
import '../styles/Outlined-button.css'
import '../styles/Tonal-button.css'
import '../styles/Filled-button.css'
import '../styles/Elevated-button.css'

export default function Button({ variant, disabled }) {
  return (
    <button className={`button ${variant}-button -icon-leading`} disabled={disabled} >
      <span className="material-symbols-outlined">send</span>
      Material M3
    </button>
  )
}