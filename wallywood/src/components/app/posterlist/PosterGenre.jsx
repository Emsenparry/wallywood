import axios from "axios";
import { createContext, useState, useEffect, useContext} from "react";

const PosterContext = createContext()

const PosterProvider = ({children}) => {
    const [posterGenre, setPosterGenre] = useState([])

    useEffect(() => {
        if(sessionStorage.getItem('postergenre')) {
            setPosterGenre(JSON.parse(sessionStorage.getItem('postergenre')))
        } else {
            const getData = async () => {
                const result = await axios.get('http://localhost:4000/poster/list/drama')
                sessionStorage.setItem('postergenre', JSON.stringify(result.data));
                setPosterGenre(result.data)
            }
            getData()
        }
    }, [children]);

    return(
        <PosterContext.Provider value={{posterGenre, setPosterGenre}}>
            {children}
        </PosterContext.Provider>
    );
}

const usePosterData = () => useContext(PosterContext)

export { PosterProvider, usePosterData }