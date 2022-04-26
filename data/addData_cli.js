// import the readline module for work with stdin, or stdout.
const readline = require("readline")
var dataJson = require("./data.json")
var domains_authorised = require("./domains_authorised.json")
var fs = require("fs")

// create a readline object to work with the stream.
// pass the stdin, or stdout in the current process.
const prompts = readline.createInterface(process.stdin, process.stdout)

//data sample for addData_cli.js {
//     "id": "0",
//     "tags": [
//         "Test"
//     ],
//     "link": "https://framaforms.org/test-1649148069",
//     "image": "https://www.ville-senlis.fr/var/www/storage/images/mediatheque/ville-de-senlis/images/03_cadre-de-vie-environnement/04_travaux-et-voirie/icone-travaux/22617-1-fre-FR/Icone-travaux.jpg",
//     "title": "Test",
//     "description": "Questionnaire sur le test",
//     "time": 1,
//     "featured": 1
// }

// create the data object to add.
var data = {
	id: dataJson.cards.length,
	tags: [],
	link: "",
	image: "",
	title: "",
	description: "",
	time: 0,
	featured: 0
}

//clear the console
process.stdout.write("\033c")

//Title of the program
console.log("------- Ajout de donnée dans le fichier data.json -------")
console.log(
	"Actuellement il y a " +
		dataJson.cards.length +
		" données dans le fichier data.json"
)
//Saute une ligne
console.log("")

//Commence la fonction pour la question du titre
questionTitle()

//Fonction for question du titre
function questionTitle() {
    prompts.question("Entrer le titre du mémoire : ", title => {
        data.title = title
        //Efface la dernière ligne de la console
        process.stdout.write("\033[1A\033[0K")
        //Ecris le titre
        console.log("Titre : " + title)
        //Saute une ligne et pose la question suivante
        console.log("")

        questionDescription()
    })
}

//Fonction for question de la description
function questionDescription() {
    prompts.question("Entrer la description du mémoire : ", description => {
        data.description = description
        //Efface les deux dernières lignes de la console
        process.stdout.write("\033[2A\033[0K")
        //Ecris la description
        console.log("Description : " + description)
        //Efface la ligne actuelle
        console.log("")
        process.stdout.write("\033[1A\033[0K")
        //Saute une ligne et pose la question suivante
        console.log("")

        questionLink()
    })
}

//Fonction for question du lien
function questionLink() {
    prompts.question("Entrer le lien du mémoire commençant par https://framaforms.org/: ", link => {
        data.link = link
        //Efface la dernière ligne de la console
        process.stdout.write("\033[2A\033[0K")
        //Ecris le lien
        console.log("Lien : " + link)
        //Saute une ligne et pose la question suivante
        //Efface la ligne actuelle
        console.log("")
        process.stdout.write("\033[1A\033[0K")
        //Saute une ligne et pose la question suivante
        console.log("")

        questionImage()
    })
}

//Fonction for question de l'image
function questionImage() {
    prompts.question("Entrer le lien de l'image du mémoire : ", image => {
        data.image = image
        //Efface la dernière ligne de la console
        process.stdout.write("\033[2A\033[0K")
        //Ecris l'image
        console.log("Image : " + image)
        //Saute une ligne et pose la question suivante
        //Efface la ligne actuelle
        console.log("")
        process.stdout.write("\033[1A\033[0K")
        //Saute une ligne et pose la question suivante
        console.log("")

        questionTime()
    })
}

//Fonction for question du temps
function questionTime() {
    prompts.question("Entrer le temps du mémoire : ", time => {
        //Parse le temps en int
        data.time = parseInt(time)

        //Si le temps est supérieur à 0 alors on le met en avant
        if (data.time > 0) {
            data.featured = 1
        }
        //Efface la dernière ligne de la console
        process.stdout.write("\033[2A\033[0K")
        //Ecris le temps
        console.log("Temps : " + time)
        
        //Saute une ligne et pose la question suivante
        //Efface la ligne actuelle
        console.log("")
        process.stdout.write("\033[1A\033[0K")
        //Saute une ligne et pose la question suivante
        console.log("")

        questionTags()
    })
}

//Fonction for question des tags
function questionTags() {
    prompts.question("Entrer les tags du mémoire : ", tags => {
        data.tags = tags.split(" ")
        //Efface la dernière ligne de la console
        process.stdout.write("\033[2A\033[0K")
        //Ecris les tags
        console.log("Tags : " + tags)
        //Efface la ligne actuelle
        console.log("")
        process.stdout.write("\033[1A\033[0K")
        //Saute une ligne et pose la question suivante
        console.log("")

        data.id = dataJson.cards.length

        showDataAndValidate()

    })
}

//Fonction for question de la validation
function showDataAndValidate() {
    //Clear the console
    process.stdout.write("\033c")

    console.log("Voici les données que vous avez entrées : ")
    console.log("")
    console.log(data)
    console.log("")
    prompts.question("Voulez-vous ajouter ces données ? (y/n) : ", answer => {
        if (answer == "y") {
            addData()
        } else {
            console.log("")
            console.log("Ajout annulé")
            console.log("")
            prompts.close()
        }
    })
}

//Fonction pour ajouter les données dans le fichier data.json
function addData() {
    //Function to verify if image is a authorized domaine in domains_authorised.json
    function isAuthorized(image) {
        var authorized = false
        for (var i = 0; i < domains_authorised.length; i++) {
            if (image.includes(domains_authorised[i])) {
                authorized = true
            }
        }
        return authorized
    }

    //Si l'image n'est pas une image autorisée alors ajoute l'image dans le fichier domains_authorised.json
    if (!isAuthorized(data.image)) {
        //Recuperer le nom du domaine de l'image
        var domain = data.image.split("/")[2]
        //Ajouter le domaine dans le fichier domains_authorised.json
        domains_authorised.domains.push(domain)
        fs.writeFileSync(
            "./data/domains_authorised.json",
            JSON.stringify(domains_authorised)
        )
    }


    dataJson.cards.push(data)
    fs.writeFile("./data/data.json", JSON.stringify(dataJson), err => {
        if (err) {
            console.log("Erreur lors de l'écriture du fichier data.json")
        } else {
            console.log("")
            console.log("Données ajoutées avec succès")
            console.log("")
            prompts.close()
        }
    })
}