import Head from "next/head"
import styles from "../styles/Home.module.scss"

import Hero from "../src/components/Hero"
import CardList from "../src/components/CardList"

import { FilterProvider } from "../src/contexts/FilterContext"
import BackgroundImage from "../src/components/BackgroundImage"
import Footer from "../src/components/Footer"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Sondage | Ecole ostéopathie IdHEO</title>
				<meta name="description" content="Cette page ressence les différents mémoires avec des sondages de l'école" />
				<link rel="icon" href="https://www.idheo.com/wp-content/uploads/2018/10/favicon-idheo.png" />
			</Head>
				<BackgroundImage />
				<main className="container-md relative z-5">
					<Hero />
					<FilterProvider>
							<CardList />
					</FilterProvider>
				</main>
				<Footer></Footer>
		</div>
	)
}
