import '../styles/Icon-button.css'
import '../styles/Outlined-icon.css'
import '../styles/Tonal-icon.css'
import '../styles/Filled-icon.css'

export default function IconButton({ iconName, variant, selected=undefined, disabled }) {
  let status = '';

  if(selected === true)  status = '--selected';
  if(selected === false) status = '--unselected';

  return(
    <button className={`icon-button ${variant}-icon ${status}`} disabled={disabled}>
      <span className="material-symbols-outlined">
        {iconName}
      </span>
    </button>
  )
}
