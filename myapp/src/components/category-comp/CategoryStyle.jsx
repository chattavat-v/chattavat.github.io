import styled from "styled-components";

export const ListCategory = styled.ul`
	justify-content: flex-end;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	margin-left: 0.5rem;
	padding-left: 0rem;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

export const CategoryItem = styled.li`
	margin-right: 1rem;
	cursor: pointer;
`;
