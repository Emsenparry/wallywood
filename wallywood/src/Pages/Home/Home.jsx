import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import SlideWrapper from "../../components/app/slidewrapper/SlideWrapper"
import { DataList } from "../../components/app/data/Data"

const Home = () => {
    return(
        <>
        <SlideWrapper />
        <ContentWrapper
                title="Home">
                <section>
                    <DataList />
                </section>
        </ContentWrapper>
        </>
        
    )
}

export default Home