import { useEffect, useState } from "react"
import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import { PosterStyle } from "./Posters.style"
import axios from "axios"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"


const Posters = () => {

    return(
       <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
        <PosterStyle>
            <div><GenreList /></div>
            <div><Outlet /></div>
        </PosterStyle>
       </ContentWrapper>
    )
}

const GenreList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('http://localhost:4000/genre')
            setData(result.data);    
        }
        getData()
    }, [setData])

    return(
        <ul>
            {data && data.map(genre => {
                return(
                    <li key={genre.id}>
                        <NavLink to={`/plakater/${genre.slug}`}>{genre.title}</NavLink></li>
                )
            })}
        </ul>
    )

}

const PosterList = () => {
    const [data, setData] = useState([])
    const { slug } = useParams();
    
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:4000/poster/list/${slug}`)
            setData(result.data);    
        }
        getData()
    }, [slug])

    return(
        <ul>
            {data && data.map(poster => {
                return(
                    <li key={poster.id}>
                    <Link to={`/poster/${slug}/${poster.id}`}>{poster.name}</Link>
                    </li>
                )
            })}
        </ul>
    )

}


const PosterDetails = () => {
    const [data, setData] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:4000/poster/list/${id}`)
            setData(result.data);    
        }
        getData()
    }, [id])

    return(
        <ul>
            {data && data.map(poster => {
                return(
                    <li>
                        Plakatdetaljer
                    </li>
                    
                )
            })}
        </ul>
    )

}
export { Posters, PosterList, PosterDetails }