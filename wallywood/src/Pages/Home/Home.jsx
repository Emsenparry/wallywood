import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import SlideWrapper from "../../components/app/slidewrapper/SlideWrapper"
import { usePosterData } from "../../components/app/posterlist/PosterList"

const Home = () => {
    const { posterList } = usePosterData()
    console.log(posterList);

    return(
        <>
        <SlideWrapper />
        <ContentWrapper
                title="Home">
                <section>
                    {posterList && posterList.slice(0,2).map(poster => {
                        return(
                            <figure key={poster.id}>
                                <img src={poster.image} alt="Poster" />
                                <figcaption>
                                <p>{poster.name}</p>
                                <p>{poster.description}</p>
                                {poster.genres && poster.genres.map(genre => {
                                    return(
                                        <p>{genre.title}</p>
                                    )
                                })}
                                </figcaption>
                            </figure>
                        )
                    })}
                </section>
        </ContentWrapper>
        </>
        
    )
}

export default Home