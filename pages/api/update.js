// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
var dataJson = require("../../data/data.json")

export default function handler(req, res) {
	var id = req.query.id
	const verif = req.query.verif

	if (verif == process.env.VERIF) {
		const boolean = dataJson.cards[id].show

		dataJson.cards[id].show = !boolean

		fs.writeFile("./data/data.json", JSON.stringify(dataJson), function (err) {
			if (err) {
				console.log("Erreur lors de l'écriture du fichier data.json")
				//send the response with error
				res.statusCode = 500
				res.json({
					error: err
				})
			} else {
				//send the response without error
				res.statusCode = 200
				res.json({
					message:
						"success passage de l'état " +
						boolean +
						" à " +
						!boolean +
						" pour le card " +
						dataJson.cards[id].title +
						"."
				})
			}
		})
	} else {
		res.statusCode = 400
		res.json({
			message: "Vous n'avez pas accès à cette page."
		})
	}
}
