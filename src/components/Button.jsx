import '../styles/Button.css'
import '../styles/Filled-button.css'

export default function Button({ variant='' }) {

  return (
    <button className={`button ${variant} -icon-leading`}>
      <span class="material-symbols-outlined">send</span>
      Material M3
    </button>
  )
}