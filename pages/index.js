import Head from "next/head"
import styles from "../styles/Home.module.scss"

import Hero from "../src/components/Hero"
import CardList from "../src/components/CardList"

import { FilterProvider } from "../src/contexts/FilterContext"
import BackgroundImage from "../src/components/BackgroundImage"
import Footer from "../src/components/Footer"
import Confirmation from "../src/components/Confirmation"

import { useRouter } from 'next/router'

export default function Home() {
	const router = useRouter()
  	const {id, name, link} = router.query

	return (
		<div>
			<Head>
				<title>Sondage | Ecole ostéopathie IdHEO</title>
				<meta name="description" content="Cette page ressence les différents mémoires avec des sondages de l'école" />
				<link rel="icon" href="https://www.idheo.com/wp-content/uploads/2018/10/favicon-idheo.png" />
			</Head>
				<Confirmation id={id} name={name}/>
				<BackgroundImage />
				<main className="container-md relative z-5">
					<Hero />
					
					<FilterProvider>
							<CardList link={link}/>
					</FilterProvider>
				</main>
				<Footer></Footer>
		</div>
	)
}
