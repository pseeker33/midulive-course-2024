import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )

/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
<h5>Shopping Cart con useContext & useReducer</h5> */}
