import { Component } from 'react'
import styled from 'styled-components'
import HeroImage from '../../assets/img/hero-image.jpg'

const DivBackground = styled.div`
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 30rem;
  z-index: 0;
  background-color: rgba(33, 37, 41, 1);
`

const DivSmok = styled.div`
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(33, 37, 41, 1);  
  opacity: 0.3;
`

const Image = styled.img`
  display: block;
  object-fit: cover;
  position: absolute;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`

class BackgroundImage extends Component {
  render() {
    return (
      <DivBackground>
        <DivSmok>
          <Image src={HeroImage} alt="Façade école idhéo" />
        </DivSmok>
      </DivBackground>
    )
  }
}

export default BackgroundImage
