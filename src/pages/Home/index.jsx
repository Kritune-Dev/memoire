import { Component } from "react"
import styled from 'styled-components'

import Hero from "../../components/Hero";

const Main = styled.main`
  display: block;
	position: relative;
	z-index: 5;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
`

;

class Home extends Component {
	render() {
		return (
			<Main>
				<Hero />
					<h1>Coucou</h1>
			</Main>
		)
	}
}

export default Home
