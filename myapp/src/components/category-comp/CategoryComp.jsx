import React, { useState, useEffect } from "react";
import { CategoryItem, ListCategory } from "./CategoryStyle";
import { Strong } from "../../styles/Fonts";
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
		<ListCategory>
			{list.map((item) => (
				<CategoryItem onClick={() => setFilterKey(item.value)} key={item._id}>
					<Strong>{item.name}</Strong>
				</CategoryItem>
			))}
		</ListCategory>
	);
};

CategoryComp.propTypes = {
	list: PropTypes.array.isRequired,
};

export default CategoryComp;
