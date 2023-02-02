import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import { DataList } from "../../components/app/data/Data"


const Plakater = () => {
    return(
        <div>
             <ContentWrapper
                title="Plakater" description="Se vores udvalg af plakater">
                <section><DataList /></section>
        </ContentWrapper>
        </div>
    )
}

export default Plakater