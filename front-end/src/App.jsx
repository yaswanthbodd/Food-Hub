import {Box} from '@mui/material'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { AdminLandingPage } from './admin/AdminLandingPage'
import { AddItem } from './admin/components/add-items/AddItem'
import ListItems from './admin/components/list-items/ListItems'
import OrderItems from './admin/components/order-items/OrderItems'

function App() {

  return (
    <Box>
        <Router>
          <Routes>
             <Route path="/admin" element={<AdminLandingPage />}>
                    <Route path="add-item" element={<AddItem />} />
                    <Route path="list-items" element={<ListItems />} />
                    <Route path="order-items" element={<OrderItems />} />
                </Route>
          </Routes>
        </Router>
    </Box>
  )
}

export default App
