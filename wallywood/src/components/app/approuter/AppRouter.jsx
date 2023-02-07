import { Routes, Route } from 'react-router-dom'
import Home from '../../../Pages/Home/Home'
import NotFound from '../../../Pages/NotFound/NotFound'
import { PosterDetails, PosterList, Posters } from '../../../Pages/Posters/Posters'


const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/plakater">
                <Route index element={<Posters />} />
                    <Route path=":slug" element={<PosterList />}>
                    <Route path=":id" element={<PosterDetails />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter