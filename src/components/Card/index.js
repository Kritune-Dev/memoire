import React from "react"
import Image from "next/image"

import Ribbon from "../Ribbon"

import s from "./Card.module.scss"
import { createShimmerImage } from "../../utils/utils"

const Card = ({ card }) => {
	const isFeatured = featured => featured == "1"
	const isDoubleLink = doubleLink => doubleLink != undefined

	const { id, title, image, description, featured, link, linkbis, time, show, bisFacultatif } = card

	if(image == "" || image == undefined) { image = "https://www.toomed.com/blog/wp-content/uploads/2014/03/table_bourgogne2014_violet_p_11963.jpg"}

	return (
		<div
			className={`col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center`}
			data-item="card"
		>
			<div className={`${s.scene}`} >
				<div className={s.card} >
					<div className={`${s["card__face"]} ${s["card__face--front"]}`}>
						<div className={s["card__image"]}>
							<Image
								src={image}
								alt={`Image ${id}`}
								layout="fill"
								placeholder="blur"
								blurDataURL={createShimmerImage(400, 300)}
							/>
						</div>
						<div className={s["card__body"]}>
							<h2 className={s["card__title"]}>{title}</h2>
							<p className={s["card__description"]}>{description}</p>
							{show && <a className={s["card__readmore"]} href={link}>Aller vers le sondage</a>}								
							{isDoubleLink(linkbis) && <a className={s["card__readmore--falcultative"]} href={linkbis}>Aller le 2ème sondage {bisFacultatif ? "(facultatif)" : "" }</a>}
						</div>
						{isFeatured(featured) && <Ribbon time={time} />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
