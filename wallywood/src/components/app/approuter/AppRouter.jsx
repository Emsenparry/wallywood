import { Routes, Route } from 'react-router-dom'
import Home from '../../../Pages/Home/Home'
import NotFound from '../../../Pages/NotFound/NotFound'
import OmOs from '../../../Pages/omos/OmOs'
import { PosterDetails, PosterList, Posters } from '../../../Pages/Posters/Posters'


const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/posters" element={<Posters />}>
                    <Route path=":slug" element={<PosterList />}/>
                    <Route path=":slug/:poster" element={<PosterDetails />} />
            </Route>
            <Route path="/omos" element={<OmOs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter