import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import SlideWrapper from "../../components/app/slidewrapper/SlideWrapper"
import { usePosterData } from "../../components/app/posterlist/PosterList"
import { HomeStyle } from "./Home.style"


const Home = () => {
    const { posterList } = usePosterData()
    console.log(posterList);

    return(
        <>
        <SlideWrapper />
        <ContentWrapper
                title="Sidste nyt...">
                <HomeStyle>
                    {posterList && posterList.slice(0,2).map(poster => {
                        return(
                            <figure key={poster.id}>
                                <img src={poster.image} alt="Poster" />
                                <figcaption>
                                <h2>{poster.name}</h2>
                                <p>Abernes Planet: Revolutionen&#8217;, foregår i en fremtid, hvor den hyperintelligente chimpanse, Caesar, leder en voksende nation af genetisk udviklede abekatte.</p>
                                {poster.genres && poster.genres.map(genre => {
                                    return(
                                        <p>Genre: {genre.title}</p>
                                    )
                                })}
                                <button type='button'>Læs mere</button>
                                </figcaption>
                            </figure>
                        )
                    })}
                </HomeStyle>
        </ContentWrapper>
        </>
        
    )
}

export default Home