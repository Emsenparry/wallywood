import { useState, useEffect } from "react"
import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import axios from 'axios'

const Posters = () => {
    return(
        <ContentWrapper
            title="Plakater" description="Se vores udvalg af plakater">
                <section><PosterList /></section>
        </ContentWrapper>
    )
}

const PosterList = () => {
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
            {apiData && apiData.map(item => {
                return(
                    <figure key={item.id}>
                        
                    </figure>
                )
            })}
        </div>
    )
}

export default Posters