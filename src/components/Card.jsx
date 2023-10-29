import Button from './Button'
import '../styles/Card.css'

export default function Card({ headline, subhead }) {
  return(
    <div className='card'>
      <div className='content'>
        <div className='headline'>
          <h4 className='title'>{headline}</h4>
          <p className='subhead'>{subhead}</p>
        </div>
        <p className='text'>
          cuestionario autorreportado que evalúa cómo las personas perciben el entorno y toman decisiones.
        </p>
        <div className='actions'>
          <Button variant="filled" />
        </div>
      </div>
    </div>
  )
}
