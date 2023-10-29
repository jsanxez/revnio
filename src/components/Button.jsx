import '../styles/buttons.css'
import '../styles/Button.css'
import '../styles/Outlined-button.css'
import '../styles/Tonal-button.css'
import '../styles/Filled-button.css'
import '../styles/Elevated-button.css'

export default function Button({ children, variant = "text", disabled }) {
  let iconPosition = ''
  if(children.length === 2)
    iconPosition = (typeof children[0] === "string") ? "-icon-trailing" : "-icon-leading"

  return (
    <button className={`button ${variant}-button ${iconPosition}`} disabled={disabled} >
      {children}
    </button>
  )
}
