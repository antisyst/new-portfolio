import { SiInstagram,  SiTwitter } from 'react-icons/si';
import styled from "styled-components";
import { FaTelegramPlane } from 'react-icons/fa';

const StyledContainer = styled.div `
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    @media (max-width: 800px) {
        display: none;
         }
`
const StyledItems = styled.ul `
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    
    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 80px;
        margin: 0px auto;
        background: #fff;
    }
`
const StyledItem = styled.a `
    display: inline-block;
    text-decoration: none;
    font-size: 30px;
    transition: all 0.2s ease-out;
    text-decoration-skip-ink: auto;
    color: #fff;
    position: relative;

    &:hover {
        transform: scale(1.03);
        color: var(--var-color-component-primary);
        transition: all 0.2s ease-out;
    }
`
const FixedLiElement = styled.li  `
    margin: 7px 0;
`
export default function FixedElements() {
    return(
        <StyledContainer>
            <StyledItems>
                <FixedLiElement>
                   <StyledItem href='https://www.instagram.com/rmzn.dev/' className='animate__animated animate__fadeInUp' target='_blank'>
                        <SiInstagram/>
                   </StyledItem>
                </FixedLiElement>
                <FixedLiElement>
                   <StyledItem href='https://t.me/rmzn_dev' className='animate__animated animate__fadeInUp' target='_blank'>
                        <FaTelegramPlane/>
                   </StyledItem>
                </FixedLiElement>
                <FixedLiElement>
                   <StyledItem href='https://twitter.com/Screamis_here' className='animate__animated animate__fadeInUp' target='_blank'>
                        <SiTwitter/>
                   </StyledItem>
                </FixedLiElement>
            </StyledItems>
        </StyledContainer>
    )
}