import styled from "styled-components";
import { ClearList } from "../styled/Mixins";

export const NavBarPrimaryStyle = styled.nav`
        font-family: ${props => props.theme.fonts[0]};
    ul{
        display: flex;
        ${ClearList}
    }
    li{
        margin-left: 20px;
        
    }
    a{
        font-size: 1.1em;
        text-decoration: none;
    }
    
`