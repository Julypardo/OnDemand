import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 100px auto;
    grid-gap: 20px;
    position: relative;

@media (max-width: 640px) {
    height: 820px;
}
`
const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;

`
const SectionLogo2 = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;

`
const SectionLogo3 = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;

`

const SectionTitleGroup = styled.div`
display: grid;
grid-template-colums: 600px auto;
margin: 0 40px;
grid-gap: 20px;
grid-template-rows: auto 50%

@media (max-width: 720px) {
    grid-template-colums: 2fr;
}
`

const SectionTitle = styled.h3`
  margin:  50px 20px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: white;
  linea-height: 1.2;

@media (max-width: 710px) {
    font-size: 40px;
}
`

const SectionText = styled.p`
color: white;
text-align: center;
`

const WaveBottom = styled.div`
position: absolute;
width: 100%;
bottom: -6px;
`
const WaveTop = styled.div`
position: absolute;
width: 100%
top: -6px;
transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
    {/*<WaveTop><Wave /></WaveTop>
    <WaveBottom><Wave /></WaveBottom>*/}
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
            
            <SectionLogo src={props.logo} />
            <SectionText>{props.text}</SectionText>
            <SectionLogo src={props.logo2} />
            <SectionText>{props.text}</SectionText>
            <SectionLogo src={props.logo3} />
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section