
import styled from 'styled-components';


export const Navigation = styled.div`
width: 100%; 
height: 4rem; 
background-color: white; 
display: flex; 
justify-content: space-around; 
align-items: center; 
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    z-index: 99; 
`


export const NavigationLinks = styled.li`
    margin: 0 .5rem; 
    font-size: 1rem; 

    @media screen and (max-width: 500px) {
        margin: 0 .3rem; 
        font-size: .8rem; 
    }
    @media screen and (max-width: 400px) {
        margin: 0 .2rem; 
        font-size: .7rem; 
    }
`

export const NavigationList = styled.ul`
    display: flex; 
    justify-content: center; 

    ${NavigationLinks}:hover { /*relevant*/
        cursor: pointer; 
    }
`