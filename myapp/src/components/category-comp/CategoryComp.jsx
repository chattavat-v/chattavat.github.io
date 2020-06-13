import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Isotope from "isotope-layout";

const CategoryComp = ({ list }) => {
	const [isotope, setIsotope] = useState(null);
	const [filterKey, setFilterKey] = useState("*");

	useEffect(() => {
		setIsotope(
			new Isotope(".filter-container", {
				itemSelector: ".filter-item",
				layoutMode: "fitRows",
			})
		);
	}, []);

	useEffect(() => {
		if (isotope) {
			filterKey === "*"
				? isotope.arrange({ filter: `*` })
				: isotope.arrange({ filter: `.${filterKey}` });
		}
	}, [isotope, filterKey]);

	return (
		<div>
			<ul>
				{list.map((item) => (
					<li onClick={() => setFilterKey(item.value)} key={item._id}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

CategoryComp.propTypes = {
	list: PropTypes.array.isRequired,
};

export default CategoryComp;
