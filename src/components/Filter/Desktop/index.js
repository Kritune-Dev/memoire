import React, { useState, useContext } from "react"
import Checkbox from "../../Checkbox"
import uuid from "react-uuid"
import s from "./Filter.module.scss"

import useTag from "../../../utils/useTag"
import { FilterContext } from "../../../contexts/FilterContext"

const FilterDesktop = () => {
	const { tagList } = useTag()

	const { filterByTags, setFilterByTags } = useContext(FilterContext)
	const [collapsed, setCollapsed] = useState(true)

	const toggleHandler = (toggle, item) => {
		// add to list
		if (toggle) {
			setFilterByTags([...filterByTags, item])
		} else {
			// remove from list
			setFilterByTags(filterByTags.filter(tag => tag !== item))
		}
	}

	const MemoCheckbox = React.memo(Checkbox)

	return (
		<div className={`d-none d-sm-block`}>
			<p className="h6">Filtrer par :</p>
			<div className={`${s.group} ${collapsed ? s["group--collapsed"] : ""}`}>
				{tagList.map(tag => {
					const key = `chk-${uuid()}`
					return (
						<MemoCheckbox
							key={key}
							id={key}
							text={tag}
							checked={filterByTags.includes(tag.toLowerCase())}
							onToggle={toggleHandler}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default FilterDesktop
