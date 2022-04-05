import React from "react"
import Image from "next/image"

import Ribbon from "../Ribbon"

import s from "./Card.module.scss"
import { createShimmerImage } from "../../Utils/utils"

const Card = ({ card }) => {
	const isFeatured = featured => featured == "1"

	const { id, title, image, description, featured, link, time } = card

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
							<a className={s["card__readmore"]} href={link}>Aller vers le sondage</a>
						</div>
						{isFeatured(featured) && <Ribbon time={time} />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
