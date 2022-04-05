import Link from "next/link"

const Confirmation = ({ id, name}) => {
  if(id !== undefined && name !== undefined) {
    return (
      <div className={`text-center bg-white border-primary rounded py-4`}>
        <h2>Merci pour votre participation</h2>
        <p>Vous avez participé au questionnaire : {name}</p>
        <p>Vous êtes le formulaire n°{id}</p>
        <p>Merci de communiquer cette information a votre praticien</p>
        <button>
          <Link href="/">
            <a>Retour à l'accueil</a>
          </Link>
        </button>
      </div>      
    )
  } else {return <div></div>}
}

export default Confirmation
