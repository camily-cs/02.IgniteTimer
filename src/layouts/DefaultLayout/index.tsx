import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaulLayout() {
  return (
    <LayoutContainer>
      <Header />

      {/* Outlet - reserva um espaço onde será inserido o conteúdo que irá variar de pagina para pagina. */}
      <Outlet />
    </LayoutContainer>
  )
}
