import { useState, useEffect } from "react"
import axios from 'axios'
// import { NavLink } from 'react-router-dom'


const DataList = () => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const url = `http://localhost:4000/poster`

        const getData = async () => {
        try{ 
            const result = await axios.get(url)
            setApiData(result.data)
        }
        catch(err) {
            console.error(err)
        }
        }
        getData()
    }, [setApiData])

    
    return(
        <div>
            
            {apiData && apiData.slice(0,2).map(item => {
                // console.log(item.genres && item.genres[0] && item.genres[0].title);
                return(
                    <figure>
                        <img src={item.image} alt="Posters" />
                            <figcaption>
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                                {item.genres && item.genres.map(genre => {
                                    return(
                                        <p>{genre.title}</p>
                                    )
                                })}
                                
                            </figcaption>
                    </figure>
                    
                )
                 
            })}
        </div>
       
    )
}

export { DataList }