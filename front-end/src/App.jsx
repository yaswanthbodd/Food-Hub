import {Box} from '@mui/material'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { AdminLandingPage } from './admin/AdminLandingPage'
import { AddItem } from './admin/components/add-items/AddItem'
import ListItems from './admin/components/list-items/ListItems'
import OrderItems from './admin/components/order-items/OrderItems'
import UserLandingPage from './user/UserLandingPage'
import CardSkeletion from './user/components/skeletions/CardSkeletion'
import Register from './user/components/authentication/register/Register'
import Login from './user/components/authentication/login/Login'
import autoLogout from './user/components/authentication/loggedin/AutoLogout' 




function App() {

  autoLogout

  return (
    <Box>
        <Router>
          <Routes>
            <Route path="/admin" element={<AdminLandingPage />}>
                    <Route path="add-item" element={<AddItem />} />
                    <Route path="list-items" element={<ListItems />} />
                    <Route path="order-items" element={<OrderItems />} />
                </Route>
                <Route path='/' element={<UserLandingPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
    </Box>
  )
}

export default App
