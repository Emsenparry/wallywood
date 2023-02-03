import styled from 'styled-components'

export const HomeStyle = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0 2em;
figure{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
}
img{
    width: 100%;
}
figcaption{
    margin: 0 1.1em;
    width: 100%;
}
h2{
    font-size: 1.2em;
    margin: 0;
}
`