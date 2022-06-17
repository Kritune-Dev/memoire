import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Confirmation from './pages/Confirmation'
import Error from './components/Error'
import BackgroundImage from './components/BackgroundImage'
import { createGlobalStyle } from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0
    let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0

    this.setState({ windowWidth, windowHeight })
  }

  render() {
    const GlobalStyle = createGlobalStyle`
    * {
      font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
    }
    body {
      margin: 0;
    }
`

    return (
      <Router>
        <GlobalStyle />
        <BackgroundImage />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/confirmation" element={<Confirmation/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;