import { Component } from "react"
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: block;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
`

const StyledH1 = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: white;
    margin-top: 3rem;
`

const StyledP = styled.p`
    font-size: 1.25rem;
    font-weight: 300;
    color: white;
    margin-top: 1rem;
`

class Hero extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledH1>Sondage ostéopathique</StyledH1>
        <div>
          <StyledP>Dans le cadre de nos mémoires fait au sein de l'école IdHEO.</StyledP>
        </div>
      </StyledDiv>
    )
  }
}

export default Hero