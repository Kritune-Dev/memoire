import React from "react"

const Tag = ({ name }) => {
	return (
		<li>
			<span className={`me-1 fw-normal rounded-0 badge bg-dark ${''}` }>{name}</span>
		</li>
	)
}

export default Tag
