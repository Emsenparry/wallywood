import styled from 'styled-components'

export const HomeStyle = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0 2em;
figure{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0 1em;
    margin: 0;
    position: relative;
}
img{
    max-width: 100%;
}
figcaption{
    p {
        font-size: 14px;
        color: ${props => props.theme.colors.tertiary};
    }
}
h2{
    font-size: 1.2em;
    margin-top: 0;
    color: ${props => props.theme.colors.tertiary};
}

button {
            font-size: 1em;
            color: ${props => props.theme.colors.tertiary};
            border: 1px solid ${props => props.theme.colors.tertiary};
            width: 101px;
            height: 34px;
            border-radius: 3px;
            position: absolute;
            bottom: 0;
            background-color: ${props => props.theme.colors.quinary};
            &:hover {
                background-color: ${props => props.theme.colors.senary};
                color: ${props => props.theme.colors.light};

            }
        }
`