import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import { usePosterData } from "../../components/app/posterlist/PosterGenre";



const Plakater = () => {
    const { posterGenre } = usePosterData()

    return(
        <div>
             <ContentWrapper
                title="Plakater" description="Se vores udvalg af plakater">
                <section>
                {posterGenre && posterGenre.map(poster => {
                        return(
                            <h1>lol</h1>
                        )
                    })}
                </section>
        </ContentWrapper>
        </div>
    )
}

export default Plakater