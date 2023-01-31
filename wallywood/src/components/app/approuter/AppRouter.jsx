import { Routes, Route } from 'react-router-dom'
import Home from '../../../Pages/Home/Home'
import NotFound from '../../../Pages/NotFound/NotFound'
import Posters from '../../../Pages/Posters/Posters'


const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/plakater" element={<Posters />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter