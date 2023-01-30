import styled from "styled-components";
import { ClearList } from "../styled/Mixins";

export const NavBarPrimaryStyle = styled.nav`
    border: solid red 1px;
    ul{
        display: flex;
        ${ClearList}
    }
    li{
        margin-left: 20px;
        margin: 1em;
    }
    a{
        text-decoration: none;
    }
    
`