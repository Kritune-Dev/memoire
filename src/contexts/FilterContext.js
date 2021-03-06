import React, { createContext } from 'react'
import useCardFilter from '../utils/useCardFilter'

const FilterContext = createContext()

function FilterProvider({ children }) {
	const { filterByTags, setFilterByTags } = useCardFilter()

	return (
		<FilterContext.Provider
			value={{
				filterByTags,
				setFilterByTags
			}}
		>
			{children}
		</FilterContext.Provider>
	)
}

export { FilterContext, FilterProvider }
