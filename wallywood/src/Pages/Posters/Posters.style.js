import styled from "styled-components";

export const PosterStyle = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    
    // GENRE LIST
.genre{
    h2{
        font-size: 1.5em;
    }
    p{
        margin: 0;
    }
    ul{
        list-style-type: none;
        padding: 0;
        margin: 0 3em 0 0;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
        width: 100%;
        &:hover{
            color: ${props => props.theme.colors.dark};
        }
    }
}


    // DIV WITH IMAGES
    .box{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
        margin: 0 0 1em 4em;
        border-left: solid 1px ${props => props.theme.colors.quinary};
        .images{
            margin-left: 4em;
        img{
            max-width: 100%;
        }
        h2, h3{
            margin: 0 0 0.5em 0;
            text-align: center;
        }
    }
        div{
            text-align: center;
            button {
            font-size: 1em;
            color: ${props => props.theme.colors.tertiary};
            border: 1px solid ${props => props.theme.colors.tertiary};
            width: 101px;
            height: 34px;
            border-radius: 3px;
            background-color: ${props => props.theme.colors.quinary};
            &:hover {
                background-color: ${props => props.theme.colors.senary};
                color: ${props => props.theme.colors.light};

            }
        }
        }
    }
`