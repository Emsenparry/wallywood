import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <ContentWrapper title="Siden blev ikke fundet">
            <p>Siden du leder efter findes ikke.</p>
            <p><Link to="/">Gå til forsiden</Link></p>
        </ContentWrapper>
    )
}

export default NotFound;