import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import SlideWrapper from "../../components/app/slidewrapper/SlideWrapper"

const Home = () => {
    return(
        <>
        <SlideWrapper />
        <ContentWrapper
            title="Velkommen"
            description="Her finder du nye og gamle film plakater"
            subtitle="Alt i filmplakater">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque reiciendis nulla voluptate aliquam tenetur, fugit quod libero placeat architecto dolore nemo quaerat minima quia impedit vel dolorum ut veritatis?
        </ContentWrapper>
        </>
        
    )
}

export default Home