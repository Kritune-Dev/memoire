/* eslint-disable react/no-unescaped-entities */
import s from "./Confirmation.module.scss"

const Confirmation = ({ id, name }) => {
	if (id !== undefined && name !== undefined) {

		//Log l'heure, la date, le nom du memoire et l'id de soumission
		const log = () => {
			const date = new Date()
			const time = date.toLocaleTimeString()
			const dateString = date.toLocaleDateString()
			const log = {
				time: time,
				date: dateString,
				type: "New submission",
				name: name,
				id: id
			}
			console.info(log)
		}

		log()

		return (
			<div className={s.confirmation}>
				<div className={s.container}>
					<h2>Merci beaucoup pour votre participation</h2>
					<div className={s.box}>
						<h4>Information du questionnaire</h4>
						<p>
							Nom du questionnaire: <strong>{name}</strong>
						</p>
						<p>
							Numéro : <strong>{id}</strong>
						</p>
					</div>
					<p>
						<strong>
							Merci de communiquer ces informations à votre praticien
						</strong>
					</p>
					<p>
						<em>
							Ces données sont sécurisées et seront enregistrées si vous donnez
							votre accord oral au praticien
						</em>
					</p>
				</div>
			</div>
		)
	} else {
		return <div></div>
	}
}

export default Confirmation
