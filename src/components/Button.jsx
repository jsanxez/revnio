import '../styles/Button.css'
import '../styles/Outlined-button.css'
import '../styles/Tonal-button.css'
import '../styles/Filled-button.css'
import '../styles/Elevated-button.css'

export default function Button({ variant='' }) {

  return (
    <button className={`button ${variant} -icon-leading`}>
      <span class="material-symbols-outlined">send</span>
      Material M3
    </button>
  )
}