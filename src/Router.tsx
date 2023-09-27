/* componente para rotas */
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaulLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaulLayout />}>
          {/* rota pagina home */}
          <Route path="/" element={<Home />} />

          {/* rota pagina histórico */}
          <Route path="/history" element={<History />} />
        </Route>

        {/* Abaixo, temos um exemplo de rota encadeada, 
        onde para acessar a rora products, será necessário passar pela rota admin
        EX: http://127.0.0.1:5173/admin/products

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/products" />
        </Route> */}
      </Routes>
    </>
  )
}
