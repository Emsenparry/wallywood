import styled from 'styled-components'
import { Reset } from '../styled/Mixins'

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    position: relative;

    nav{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    h1{
        font-family: ${props => props.theme.fonts[0]};
        text-transform: uppercase;
        color: ${props => props.theme.colors.secondary};
        font-size: 3rem;
        font-weight: 900;
        ${Reset}
    }
`

