import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Posters from '../../Pages/Posters'

const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/plakater" element={<Posters />} />
        </Routes>
    )
}

export default AppRouter