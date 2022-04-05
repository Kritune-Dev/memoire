/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import s from "./Confirmation.module.scss"

const Confirmation = ({ id, name }) => {
	if (id !== undefined && name !== undefined) {
		return (
			<div className={s.confirmation}>
				<div className={s.container}>
					<h2>Merci pour votre participation</h2>
					<p>Vous avez participé au questionnaire : {name}</p>
					<p>Vous êtes le formulaire n°{id}</p>
					<p>
						<strong>
							Merci de communiquer ces informations a votre praticien
						</strong>
					</p>
				</div>
			</div>
		)
	} else {
		return <div></div>
	}
}

export default Confirmation
