import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";


const ShowcaseLayout = styled.div `
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    padding: 0px 10%;
    margin-bottom: 4vh;

    @media only screen and (max-width: 768px) {
        padding: 0px 6%;
    }

`;
const ShowcaseH1 = styled.h1 `
    font-weight: bold;
    font-family: 'General Sans', sans-serif;
    font-size: calc(10px + 10vmin);
    color: var(--var-color-component-white);

    @media only screen and (max-width: 768px) {
    font-size: calc(10px + 11vmin);
    }
`
const ShowcaseH2 = styled.h2 `
    font-weight: bold;
    font-family: 'General Sans', sans-serif;
    font-size: calc(10px + 7.5vmin);
    color: var(--var-color-component-white);

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 8.2vmin);
        }
`
const ShowcaseH3 = styled.h3 `
    font-weight: bold;
    font-family: 'General Sans', sans-serif;
    font-size: calc(10px + 4vmin);
    color: var(--var-color-component-white);
    padding-right: 4%;
    margin-top: 15px;

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 5vmin);
        }
`
const ShowcaseSpan = styled.span  `
    font-weight: bold;
    font-family: 'Chakra Petch', sans-serif;
    font-size: calc(10px + 3vmin);
    color: var(--var-color-component-primary);

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 4vmin);
        }
`
const ShowcaseH2Span = styled.span `
    font-weight: bold;
    font-size: calc(10px + 7.5vmin);
    font-weight: bold;
    color: var(--var-color-component-primary);
`

const EmptyContent = styled.br `
user-select: none;
`
export default function Showcase() {
    return(
       <ShowcaseLayout>
        <EmptyContent/>
        <EmptyContent/>
        <ShowcaseSpan className="animate__animated animate__fadeIn">Hi, my name is</ShowcaseSpan>
        <ShowcaseH1 className="animate__animated animate__fadeIn">Ramazan Azimli</ShowcaseH1>
        <ShowcaseH2 className="animate__animated animate__fadeIn">I'm Frontend <ShowcaseH2Span>UI</ShowcaseH2Span> Developer</ShowcaseH2>
        <ShowcaseH3 className="animate__animated animate__fadeIn">Crafting Engaging User Experiences with Creative Design & Advanced Technology.</ShowcaseH3>
       </ShowcaseLayout>
    )
}