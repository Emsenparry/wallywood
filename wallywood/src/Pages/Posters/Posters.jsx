import { useState, useEffect } from "react"
import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"

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
                setApiData()
            }
        }
    })
}

export default Posters