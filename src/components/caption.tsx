import styled from "styled-components";

const CaptionContainer = styled.div `
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: auto;
    right: 40px;
    z-index: 10;
    @media (max-width: 800px) {
     display: none;
      }
`
const CaptionItems = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;

    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 80px;
        margin: 0px auto;
        background: #fff;
    }
`
const CaptionItem = styled.p `
    margin: 20px auto;
    padding: 10px;
    user-select: none;
    color: var(--var-color-component-primary);
    font-weight: bold;
    font-family: 'Chakra Petch', sans-serif;
    writing-mode: vertical-rl;
`
export default function CaptionContent() {
    return(
        <CaptionContainer>
            <CaptionItems>
                <CaptionItem className="className='animate__animated animate__fadeInUp'">when you build in silence people don't know what to attack</CaptionItem>
            </CaptionItems>
        </CaptionContainer>
    )
}
