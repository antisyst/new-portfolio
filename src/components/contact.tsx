import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";



const ContactLayout = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: max-content;
padding: 10vh 10%;
margin-top: 1vh;

@media only screen and (max-width: 768px) {
    padding: 0px 2%;
    margin-top: 9vh;
    margin-bottom: 5vh;
}
`
const FirstContent = styled.h1 `
font-weight: bold;
font-size: calc(10px + 5vmin);
font-family: 'General Sans', sans-serif;
text-align: left;
color: var(--var-color-component-white);
margin: 3vh 0;


@media only screen and (max-width: 768px) {
    font-size: calc(10px + 7vmin);
}
`
const ContactContent = styled.p `
    color: var(--var-color-component-white);
    font-weight: bold;
    text-align: center;
    font-size: 27px;
    padding: 0 7%;

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 3.6vmin);
    }
`
const ContactButton = styled.a `
    text-decoration: none;
    padding: 19px 23px;
    background: var(--var-color-component-primary);
    color: var(--var-color-component-white);
    font-weight: bold;
    margin-top: 30px;
    width: 230px;
    text-align: center;
    border-radius: 8px;
    transition: all 0.4s ease-out;
    font-size: 22px;
    filter: drop-shadow(0 0 0.1rem var(--var-color-component-primary));

    &:hover {
    transition: all 0.4s ease-out;
    filter: drop-shadow(0 0 0.75rem var(--var-color-component-primary));
    }
    @media only screen and (max-width: 768px) {
        cursor: none;
    }
`


export default function Contact() {
    return(
        <ContactLayout id="contact">
            <Fade delay={200} triggerOnce={true} cascade damping={1e-1}>
                <FirstContent>Contact</FirstContent>
                </Fade>
            <Fade delay={300} triggerOnce={true} cascade damping={1e-1}>
                <ContactContent>If you're looking for a frontend developer who is passionate about creating intuitive user interfaces and delivering high-quality work, please don't hesitate to contact me. I look forward to hearing from you!</ContactContent>
                </Fade>
                <ContactButton href="https://t.me/rmzn_dev" target="_blank">Say Anything</ContactButton>
        </ContactLayout>
    )
}