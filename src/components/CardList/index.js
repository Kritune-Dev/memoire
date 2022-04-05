import React, { useContext } from "react"
import Card from "../Card"
import FilterDesktop from "../Filter/Desktop"
import FilterMobile from "../Filter/Mobile"

import useCard from "../../hooks/useCard"

import { FilterContext } from "../../contexts/FilterContext"

const CardList = () => {
	const { isLoading, cardList } = useCard()

	const { filterByTags } = useContext(FilterContext)

	const cardHasTags = (card, tags) => {
		return tags.length > 0
			? card.tags.filter(value => tags.includes(value.toLowerCase())).length > 0
			: true
	}

	return (
		<div className={`shadow-sm p-3 mb-5 rounded ${'bg-white'}`} id="cards">
			{isLoading && <h4>En chargement...</h4>}
			{!isLoading && (
				<>
					<div className={`p-2`}>
						<FilterDesktop />
						<FilterMobile />
					</div>
					<hr className={`mt-3`} />
					<div className={`row`}>
						{cardList
							.filter(card => cardHasTags(card, filterByTags))
							.map(card => (
								<Card key={card.id} card={card} />
							))}
					</div>
				</>
			)}
		</div>
	)
}

export default CardList