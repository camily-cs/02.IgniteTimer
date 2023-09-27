/* componente para rotas */
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'

export function Router() {
  return (
    <>
      <Routes>
        {/* rota pagina home */}
        <Route path="/" element={<Home />} />

        {/* rota pagina histórico */}
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  )
}
