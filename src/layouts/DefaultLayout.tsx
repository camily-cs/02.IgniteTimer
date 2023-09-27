import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaulLayout() {
  return (
    <div>
      <Header />

      {/* Outlet - reserva um espaço onde será inserido o conteúdo que irá variar de pagina para pagina. */}
      <Outlet />
    </div>
  )
}
