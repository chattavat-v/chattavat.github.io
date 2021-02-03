import moment from "moment";

export const calculateYearOfWork = () => {
	let startWork = moment([2015, 9, 1]);
	let nowWork = moment();

	return nowWork.diff(startWork, "years");
};

export const listWork = [
	{
		name: "Dplus Intertrade Company Limited, Bangkok",
		date: "2019/11/1 - present",
		position: "Senior Backend developer",
		description: [
			"Develop application programming interface with node.js, mongoDB",
			"Develop administrator web application with react.js",
			"Develop mobile application with react native",
			"Develop cross platform react native for web",
			"Develop line messaging api and interface in service, mobile, web application",
			"Develop firebase messaging in service, mobile, web application",
			"Develop service time schedule with bull, bull-board and redis",
		],
	},
	{
		name: "Obodroid Company Limited, Bangkok",
		date: "2019/03/01 - 2019/11/01",
		position: "Develop Tools Engineer",
		description: [
			"Maintenance and upgrade backend in web service with node.js, mongoDB, RabbitMQ",
			"Maintenance and upgrade frontend in web control robot with angularJS, d3.js",
			"Develop web config hardware module with react, redux, node.js",
			"Support ROS system and develop state machine",
		],
	},
	{
		name: "TRACEON Company Limited, Bangkok",
		date: "2015/09/01 - 2019/03/01",
		position: "Embedded System Engineer",
		description: [
			"Design Application Programming Interface (API) using Node JS, HTML, CSS, Express, Socket.io",
			"Design circuit control (PCB) using Eagle Program",
			"Design software control system using C Arduino, AVR Studio",
			"Design Architecture Hardware and Software solution’s Project",
			"Design mechanics part using SolidWorks and 3D printing",
		],
	},
];
