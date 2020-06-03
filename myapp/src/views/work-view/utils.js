import moment from "moment";

export const calculateYearOfWork = () => {
	let startWork = moment([2015, 9, 1]);
	let nowWork = moment();

	return nowWork.diff(startWork, "years");
};
