import Button from './Button'
import '../styles/Card.css'

export function Card({ children }) {
  return(
    <div className='card'>
      {children}
    </div>
  )
}

export function Headline({ title, subhead }) {
  return(
    <div className='headline'>
      <h5 className='title'>{title}</h5>
      {subhead && <h6 className='subhead'>{subhead}</h6>}
    </div>
  )
}
