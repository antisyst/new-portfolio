import styled from "styled-components"

const FooterContent = styled.h3  `
    font-family: 'Chakra Petch', sans-serif;
    font-weight: bold;
    color: var(--var-color-component-white);
`
const FooterContentSpec = styled.span `
    color: var(--var-color-component-primary);
    font-weight: bold;
    font-family: 'Chakra Petch', sans-serif;
`
const Copyright = styled.p `
    color: var(--var-color-component-white);
    font-weight: bold;
    text-align: center;
    margin-top: 11px;
    font-size: 18px;
`
const FooterLayout = styled.footer `
    padding: 5vh 0;
    border-top: 2px solid var(--var-color-component-white);
    text-align: center;
    margin: 0 5%;
    font-family: 'Chakra Petch', sans-serif;
`
export default function Footer() {
    return(
        <FooterLayout>
                <FooterContent>Designed & Developed by <FooterContentSpec>Ramazan Azimli</FooterContentSpec></FooterContent>
                <Copyright>Copyright 2023 ©</Copyright>
        </FooterLayout>

    )
}