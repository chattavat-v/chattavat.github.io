import * as Img from "./images";

export const listCategory = [
	{ _id: "1", value: "*", name: "ALL" },
	{ _id: "2", value: "hardware", name: "HARDWARE" },
	{ _id: "3", value: "software", name: "SOFTWARE" },
	{ _id: "4", value: "electronics", name: "ELECTRONICS" },
];

export const listExperience = [
	{
		name: "DELIVERY ROBOT VERSION 2.0",
		title:
			"The Book Drop is an all-in-one self-service library assets return tower model.Its large touch screen and simple interface allow for easy touch interactivity.Scan ID for userauthentication, print out proof of transaction and capture your image. The Book Drop incorporates auto-shutter technology, smart conveyor and built in sensors for exceptional intelligent. The book return system allows the robot to deliver books to the storage bin that has been sorted. Comes from RFID screening system",
		location: "Sakhonnakorn, Thailand",
		year: "2018",
		image: Img.imgDeliveryRobotBanner,
		category: "hardware",
		descriptions: [
			"Research and development of book return systems and sorting into books.",
			"Develop electronic circuits of all systems.",
			"Develop functional architecture of the entire system.",
			"Develop software to control all system functions.",
			"Installation of hardware and mechanics.",
			"Develop API used functional communication between Hardware and software frontend.",
			"Design database system using NoSQL (MongoDB).",
		],
	},
	{
		name: "AUTO SORTER VERSION.1.0",
		title:
			"The Book Drop is an all-in-one self-service library assets return tower model.Its large touch screen and simple interface allow for easy touch interactivity.Scan ID for userauthentication, print out proof of transaction and capture your image. The Book Drop incorporates auto-shutter technology, smart conveyor and built in sensors for exceptional intelligent. The Book Drop T1, experience the newer and smarter way.",
		location: "Nakron Ratchasima",
		year: "2016",
		image: Img.imgAutoSorterBanner,
		category: "hardware",
		descriptions: [
			"Research and development of book return systems and sorting into books.",
			"Electronic circuit design.",
			"System architecture design.",
			"Develop software to control all system functions.",
			"Installation of hardware and mechanics.",
			"Customize the book separation system to match the system of the university library.",
		],
	},
	{
		name: "BOOK DROP VERSION.1.0",
		title:
			"The Book Drop is an all-in-one self-service library assets return tower model.Its large touch screen and simple interface allow for easy touch interactivity.Scan ID for userauthentication, print out proof of transaction and capture your image. The Book Drop incorporates auto-shutter technology, smart conveyor and built in sensors for exceptional intelligent. The Book Drop T1, experience the newer and smarter way.",
		location: "Nakhon pathom, Thailand",
		year: "2016",
		image: Img.imgBookdopBanner,
		category: "hardware",
		descriptions: [
			"Research and development of book return systems.",
			"Electronic circuit design.",
			"System architecture design.",
			"Develop software to control all system functions.",
			"Develop Software Management Data log stored on the SD card",
			"Installation of hardware and mechanics.",
			"Develop API used functional communication between Hardware and software frontend.",
		],
	},
	{
		name: "ACCESS CONTROL VERSION.1.0",
		title:
			"Automatic access control system design Is designed to determine access rights To relevant internal personnel And prevent misfortune that may be caused by outsiders",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgAccessControlBanner,
		category: "hardware",
		descriptions: [
			"Electronics circuit design.",
			"System architecture design.",
			"Develop software to control all system functions.",
			"Develop API used functional communication between Hardware and software frontend.",
		],
	},
	{
		name: "FLAP GATE VERSION.1.0",
		title:
			"The flip gate is more than just a gate. With built in sensors and identification technology, the flip gate accurately identify and generate useful reports. Both elegant and safe, the flip gate can be integrated with the security gate or third parties security systems. Flip gate, the next level in accessibility.",
		location: "Rayong, Thailand",
		year: "2016",
		image: Img.imgFlapgateBanner,
		category: "hardware",
		descriptions: [
			"Solve the problem of receiving the user card code from the card reader.",
			"Electronic circuit design.",
			"System architecture design.",
			"Develop the API used to receive",
			"send data from the card reader between hardware and software frontend.",
			"Installing hardware accessories and supplemental electronic circuits.",
		],
	},
	{
		name: "SWING GATE VERSION.1.0",
		title:
			"The flip gate is more than just a gate. With built in sensors and identification technology, the flip gate accurately identify and generate useful reports. Both elegant and safe, the flip gate can be integrated with the security gate or third parties security systems. Flip gate, the next level in accessibility.",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgSwingGateBanner,
		category: "hardware",
		descriptions: [
			"Research and development of automatic entry",
			"design systems.",
			"Develop electronic circuits that support Mifare, QR code.",
			"Develop system architecture.",
			"Installation of hardware and mechanics.",
			"Design database system using NoSQL (MongoDB).",
			"Develop the API used for communication between hardware and software frontend.",
		],
	},
	{
		name: "STAFF STATION VERSION.2.0",
		title:
			"The Staff Station T1 with its simple design, it can be placed atop or hidden under the desktop. Connect to a personal computer and perform tasks with ease. Place tagged library assets in any orientation within the read-zone and process multiple tagged library assets at once.",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgStaffStationBanner,
		category: "hardware",
		descriptions: [
			"Research and development of a borrow and return system with a new RFID system.",
			"Develop electronic circuits to be easy and take the least time to produce.",
			"Develop new system architecture.",
		],
	},
	{
		name: "MINI STAFF VERSION.2.0",
		title:
			"Mini staff station is designed to sit well on the tabletop. This is achieved by its moderate size and weight design. It is also designed to be aesthetically appealing with its sleek surface design and LED illuminations while keeping its functionality. The mini staff station can be easily connected to a computer via USB. It is a simple plug and play contactless card reader solution.",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgMiniStaffStation,
		category: "hardware",
		descriptions: [
			"Research and development of a borrow and return system with a new RFID system.",
			"Develop electronic circuits to be easy and take the least time to produce.",
			"Develop new system architecture",
		],
	},
	{
		name: "PCB ACCESS CONTROL VERSION1.1",
		title:
			"Automatic access control design circuit Designed to be used to assign access rights To related insiders And prevent the occurrence of bad events that may be caused by outsiders There are many ways to request permission to enter. May check the eligibility by using the code, mifare card, QR code or fingerprint Can be either or used together to increase security even more",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgPcbAccessControl,
		category: "electronics",
		descriptions: [
			"The system has a card reader Mifare Reader.",
			"The system can connect and receive and send commands for the Finger Scan module.",
			"The system to control the operation of the Relay Trigger.",
			"There is a light display system to indicate the working status.",
			"Notification system with speakers connected to the Buzzer.",
			"Step down voltage regulator 12 VDC to 5 VDC.",
			"Processing with chip Atmega328P.",
			"Logic convertor.",
			"Support Relay trigger control.",
			"USB to serial with FTDI.",
		],
	},
	{
		name: "PCB BOOK DROP VERSION.2.0",
		title:
			"Control system of the book return system Is an important part of the work of the product system. Book drop version 2.0 There are two main processing systems, Atmega2560, which are part of the motor mechanism or sensor used within the book drop. The processing system used to reset the RFID reader is Atmega328P. The control circuit system mentioned above Will connect to the operating system Raspberry Pi with Linux in the Serial Port communication channel.",
		location: "Sakhonnakorn, Thailand",
		year: "2018",
		image: Img.imgPcbBookdrop,
		category: "electronics",
		descriptions: [
			"The system can connect and receive and send commands for the RFID Module module.",
			"The system can connect and receive values from N type or P type sensors.",
			"The system can control the operation of the Relay Trigger.",
			"There is a light display system to indicate the working status.",
			"The system can control the operation of the stepping motor drive.",
			"Step down voltage regulator 12 VDC to 5 VDC.",
			"Processing with chip Atmega328P and Atmega2560.",
			"Logic convertor 12,24 VDC to 5 VDC with N type or p type.",
			"Support Relay trigger control.",
			"USB to serial with FTDI.",
		],
	},
	{
		name: "PCB CHARGE VERSION.1.0",
		title:
			"Control system of the book return system Is a part that manages the battery sarting system that is inside the robot that is used to transport books to the sorting tank There is the main processing system, Atmega2560, which is part of the battery configuration and management. To control battery charging safely and efficiently Within the circuit there is a system to check the current and voltage levels of the battery while charging. Send-receive data can be sent as far as 1 kilometer.",
		location: "Sakhonnakorn, Thailand",
		year: "2018",
		image: Img.imgPcbChargeModule,
		category: "electronics",
		descriptions: [
			"The system can connect and receive and send commands via Hardware Serial.",
			"The system can monitor the current and voltage levels.",
			"The system can control the operation of the Relay Trigger.",
			"There is a system capable of receiving and sending signals at a distance of up to 1 km.",
			"Step down voltage regulator 12 VDC to 5 VDC.",
			"Processing with chip Atmega2560.",
			"Current Sensor Range 50A.",
			"Support Relay 12 VDC trigger control.",
			"USB to serial with FTDI.",
			"Voltage Sensor support 4 channel.",
			"RS422/485 module",
		],
	},
	{
		name: "PCB CONVEYOR CONTROL VERSION.1.0",
		title:
			"Control circuits of small conveyor systems Is part of the work system of the book return machine That is responsible for controlling and sequencing the work of the conveying system in conveying books to the sorting tank by the robot There is a main processing system, Atmega2560. Within the circuit, there are 2 step stepper motor drive systems and can send - receive data up to 1 kilometer.",
		location: "Sakhonnakorn, Thailand",
		year: "2018",
		image: Img.imgPcbConveyorControl,
		category: "electronics",
		descriptions: [
			"The system can connect and receive and send commands via Hardware Serial.",
			"The system can control the stepping motor NEMA17.",
			"The system can control the operation of the Relay Trigger.",
			"There is a system capable of receiving and sending signals at a distance of up to 1 km.",
			"The system can connect and receive values from N type or P type sensors.",
			"Step down voltage regulator 12 VDC to 5 VDC.",
			"Processing with chip Atmega2560.",
			"Logic convertor 12,24 VDC to 5 VDC with N type or P type.",
			"Support Relay trigger control.",
			"Control Step motor Current maximum 3A. 2 channels.",
			"USB to serial with FTDI.",
		],
	},
	{
		name: "PCB DRIVE CONTROL VERSION.1.0",
		title:
			"Control circuit of the robot's drive system Is part of the Book Drop Version 2.0 product And can receive sensor information that is used to monitor movement around In addition to having a core processing system Within the circuit, there is a sub-processing system, Atmega328P, which manages the main sensor used to monitor the movement of the surrounding area To reduce the work load of the main processing system and become more independent in the operation of the system",
		location: "Sakhonnakorn, Thailand",
		year: "2018",
		image: Img.imgPcbDriveControl,
		category: "electronics",
		descriptions: [
			"The system can connect and receive and send commands by Hardware Serial up to 3 channels.",
			"The system can control the operation of a stepping motor close loop type.",
			"The system can connect and receive values from N type or P type sensors.",
			"There is a system capable of receiving and sending signals at a distance of up to 1 km.",
			"Step down voltage regulator 12 VDC to 5 VDC.",
			"Processing with chip Atmega328P and Atmega2560.",
			"Logic convertor 12,24 VDC to 5 VDC with N type or P type.",
			"Control Step motor close loop type.",
			"USB to serial with FTDI.",
			"RS422/485 module.",
		],
	},
	{
		name: "PCB LOGIC CONVERTOR MODULE VERSION.1.0",
		title:
			"The main circuit that is part of the Swing Gate Version 1.0 product. The circuit is responsible for receiving data from the sensor and converting the voltage level of the data received. The main processing system can be read. Without damage to the main processing system Within the circuit, there is a cooling system installed for the main processing system to reduce the deterioration of the system, not causing excessive heat to the level that can be received.",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgPcbLogicConvertor,
		category: "electronics",
		descriptions: [
			"The system can connect to receive and send commands by Hardware Serial up to 3 channels.",
			"The system can control the operation of the stepping motor close loop type.",
			"The system can connect to receive values from N type or P type sensors.",
			"There is a system capable of receiving and sending signals at a distance of up to 1 km.",
			"Support processing chip Atmega2560.",
			"Logic convertor 12,24 VDC to 5 VDC with N type or P type.",
			"USB to serial with FTDI.",
			"Air flow System",
			"RS422/485 module.",
		],
	},
	{
		name: "PCB MINI STAFF VERSION.1.1",
		title:
			"Mifare card reader circuit is the main circuit of the product. Mini Staff Verison 1.1 Inside the circuit, the main processing system is Atmega32U4, which can be connected and used like a mouse or keyboard. The circuit can be connected to the mifare reader by plugging in and connecting to each other. The main function of the system is to read the information of the card or save the data to the card.",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgPcbMiniStaff,
		category: "electronics",
		descriptions: [
			"Processing with chip Atmega32U4.",
			"Streaming Color RGB",
			"Support PN532 module (Mifare).",
			"USB Keyboard type.",
		],
	},
	{
		name: "PCB MONITORING MODULE VERSION.1.0",
		title:
			"Book Drop Version 2.0 product status display circuit is a part of the robot system that acts as a book to sorting tanks. The main function of the circuit is to Check the current and voltage of the robot To observe the energy consumption behavior of the system There are 4 systems that support sensor, temperature and humidity connections within the robot and the cooling control system that supports connecting to 2 sets of cooling fans There is a screen that displays the temperature values. Current and voltage To make it easier to maintain and check for alternatives",
		location: "Sakhonnakorn, Thailand",
		year: "2018",
		image: Img.imgPcbMonitoringModule,
		category: "electronics",
		descriptions: [
			"The system can display the screen. And will show the temperature, current level.",
			"The system can control the operation of the Relay Trigger.",
			"Temperature display system by Red LED",
			"The system can monitor the current and voltage levels.",
			"Processing with chip Atmega328P.",
			"Monitoring Temperature with LCD charactor 16x2.",
			"Interface Temperature DHT22.",
			"Current Sensor Range 50A.",
			"Support Relay trigger control.",
			"USB to serial with FTDI.",
		],
	},
	{
		name: "PCB SWITCHING REGULATOR MODULE VERSION.1.0",
		title:
			"A switching power supply circuit is a circuit that reduces voltage levels Can receive 7-35 volt inlet pressure and have 2 output voltages for static, 5 volt and up to 30 volt. The circuit can supply a maximum of 3 Amp within the circuit that supports and uses up to 3 sets.",
		location: "Sakhonnakorn, Thailand",
		year: "2018",
		image: Img.imgPcbSwitchingModule,
		category: "electronics",
		descriptions: [
			"Step down voltage regulator 3 channels.",
			"IC LM2575t fixed 5 VDC.",
			"IC LM2575t can adj.",
			"Voltage input 7 to 35 VDC.",
			"Voltage output 5 VDC.",
			"Circuit can adjust voltage 5 to 30 VDC.",
		],
	},
	{
		name: "PCB SELF CHECK VERSION.2.0",
		title:
			"The control circuit of the self check version 2.0 is the center of all work within the machine. Within the circuit there is the main processing system, Atmega2560, which controls and manages all system operations. Within the circuit can connect the speaker and can play the sound out Supports temperature and humidity reading in machines Within the circuit supports connection to communicate with other operating systems such as window, linux using USB comport.",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgPcbSelfCheck,
		category: "electronics",
		descriptions: [
			"The system can connect and receive and send commands for the RFID Module module.",
			"The system can control the operation of the Relay Trigger.",
			"There is a light display system to indicate the working status.",
			"Can check the temperature.",
			"MP3 audio player with 7 watt.",
			"The system can control the operation of the stepping motor drive.",
			"Step down voltage regulator 12 VDC to 5 VDC.",
			"Processing with chip Atmega2560.",
			"MP3 Module 7 watt.",
			"Support Relay trigger control 2 channels.",
			"Temperature Module DHT22.",
			"USB to serial with FTDI.",
		],
	},
	{
		name: "PCB STAFF STATION VERSION.2.1",
		title:
			"Control circuit for working, borrowing-returning books. The circuit will connect to the RFID reader to read and write the tag information within the book. The circuit can control the color system. To show the working status of the system The main processing system is Atmega2560 and communicates with Serial Comport.",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgPcbStaffStation,
		category: "electronics",
		descriptions: [
			"The system can connect and receive and send commands for the RFID Module module.",
			"There is a light display system to indicate the working status.",
			"Step down voltage regulator 12 VDC to 5 VDC.",
			"Processing with chip Atmega2560.",
			"USB to serial with FTDI.",
		],
	},
	{
		name: "PCB SWING GATE VERSION.1.0",
		title:
			"Signal voltage divider circuit that is part of Swing Gate Version 1.0 for disabled and wheelchair users. The circuit is an extension to the Arduino UNO R3, which is the main processor. The circuit will accept the voltage of the signal with a voltage level of 12 Volt. Decrease the voltage to 5 Volt using the voltage divider principle that is calculated. And the circuit also enhances the connection of the wires to make it easier to install the equipment",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgPcbSwingGate,
		category: "electronics",
		descriptions: [
			"Circuit board supporting the operation of Arduino UNO R3 processing system.",
			"Divider system by reducing the voltage level from 12 VDC to 5 VDC.",
			"Voltage divider.",
		],
	},
	{
		name: "WEB CONFIG HARDWARE MODULE",
		title:
			"This project web application config module hardware. Develop this project for easier to config parameter module before bring module to integrate in main system. This we build API for connect and communicate with hardware module because hardware module is running by python language.",
		location: "Bangkok,Thailand",
		year: "2019",
		image: Img.imgWebConfigHardware,
		category: "software",
		descriptions: [
			"Develop frontend by React, react hook, axios",
			"Backend use Node.js",
			"Build api to connect and communication hardware module",
		],
	},
	{
		name: "WEB SERVICE DELIVERY ROBOT VERSION.2.0",
		title:
			"Web application that controls the operation of the robot that is part of the Book Drop Version 2.0 product, which is responsible for transporting books to the sorting tank by the service. There are many functions that can be configured serial comport, Ip address and display. The config data can be checked for the battery and the temperature received from hardware in real time by socket.io",
		location: "Sakhonnakorn, Thailand",
		year: "2018",
		image: Img.imgWebServiceDeliveryRobot,
		category: "software",
		descriptions: [
			"Web application that controls the operation of the robot that is part of the Book Drop Version 2.0 product, which is responsible for transporting books to the sorting tank by the service.",
			"There are many functions that can be configured serial comport, Ip address and display.",
			"The config data can be checked for the battery and the temperature received from hardware in real time by socket.io",
			"Developed with html, css, javascript so that the user can use it as quickly and easily as possible.",
			"Bootstrap is used to create a Responsive web design and use it to decorate the page more beautifully.",
			"Developed with NodeJS.",
			"EJS Templete engine used to send and receive data to Frontend.",
			"Socket.io to send action data from hardware to a real time format.",
			"MongoDB is a database system. Used to manage, create and store data.",
			"File Sync to store system config values.",
			"Passport, Session is used for login system.",
		],
	},
	{
		name: "WEB SERVICE SWING GATE VERSION.1.0",
		title:
			"Is an application that runs on linux operating systems using the Raspberry Pi as a system processing system. Web service is a part of the Swing gate Version 1.0 product. Web Service is developed with Nodejs and uses the EJS Template engine as fronted. The system can connect to hardware that has The system to order the product, whether it is the order to open and close the light and sound system of the web application, the user must login before using the service within the user system. If config serial port and ip address or can open, close the door The system has to receive the information of the user card while touching the mifare card or reading the barcode as a real time format using socket.io",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgWebServiceSwingGate,
		category: "software",
		descriptions: [
			"Is an application that runs on linux operating systems using the Raspberry Pi to process the operating system. The purpose of the API is to connect hardware with the user interface to access the system.",
			"Developed with html, css, javascript to make it as fast and easy.",
			"Bootstrap is used to create a Responsive web design and use it to decorate the page more beautifully.",
			"Developed with NodeJS.",
			"Templete engine handlebar used to receive - send data to Frontend.",
			"Socket.io to send data from hardware into a real time format.",
			"MongoDB is a database system. Used to manage, create and store data.",
			"File Sync to store system config values.",
			"Passport, Session is used for login system.",
		],
	},
	{
		name: "WEB SERVICE ACCESS CONTROL VERSION.1.1",
		title:
			"Is an application that runs on the linux operating system using the Raspberry Pi as a system processing system. Web service is a part of the Access Control product version 1.1. Web Service is developed with Nodejs and uses the EJS Template engine as fronted. The system can receive data from Mifare, QR code and Finger scan reader by sending data from Hardware that will use Socket.io which has the data sent as Real time. The system can config comport of the processing hardware that is sent. - Receive data with Serial port and have ip config system address used The web service running and socket system can be turned on or off through the front door and a web application can be derived from a photo taken. Camera connected to hardware to display on the web application by accessing data, time and pictures while access is stored in the database with MongoDB.",
		location: "Bangkok,Thailand",
		year: "2018",
		image: Img.imgWebServiceAccessControl,
		category: "software",
		descriptions: [
			"Developed with html, css, javascript so that the user can use it as quickly and easily as possible.",
			"Bootstrap is used to create a Responsive web design and use it to decorate the page more beautifully.",
			"Developed with NodeJS.",
			"EJS Templete engine used to send and receive data to Frontend.",
			"Socket.io to send data from hardware into a real time format.",
			"MongoDB is a database system. Used to manage, create and store data.",
			"File Sync to store configurations system.",
			"Passport, Session is used for login system.",
		],
	},
	{
		name: "WEB SERVICE HGMC",
		title:
			"Design and update the Web service as well as customize Sequence of the system within the robot with robot operation system. This web application can control robots and response data or action robot with realtime system.",
		location: "Bangkok,Thailand",
		year: "2019",
		image: Img.imgWebServiceHGMC,
		category: "software",
		descriptions: [
			"Web application that controls and displays the response of the robot.",
			"The primary assignment duty is to design, customize, function as assigned by the Web developer.",
			"NodeJs, part of the backend webservice system.",
			"Socket.io Delivery and Receive real time data.",
			"Restful API connection and communication between the frontend and backend.",
			"RabbitMQ, the management of data sequences and commands.",
			"AngularJs Webservice system developed as a single page application.",
			"D3Js Render Graphic on the web.",
			"Mongo DB database system.",
			"Docker and Git versual control ( Git Kraken, Bitbucket ).",
		],
	},
	{
		name: "PANYA5G ADMINISTRATOR",
		title: "Design web application for management user on system",
		location: "Bangkok,Thailand",
		year: "2020",
		image: Img.imgPanya5gAmin,
		category: "software",
		descriptions: [
			"Develop web application with react, redux, redux thunk",
			"Call service for management data with axios and superagent",
			"Develop service with node js (express framework)",
			"MongoDB is a database system. Used to manage, create and store data.",
		],
	},
	{
		name: "PANYA5G APP",
		title: "Design application for android and ios",
		location: "Bangkok,Thailand",
		year: "2020",
		image: Img.imgPanya5gApp,
		category: "software",
		descriptions: [
			"Application for management payment member and owner",
			"Summary payment every date, can upload image payment slip",
			"System has notification when member upload payment slip",
			"System call line messaging api",
			"Develop appliction with react native",
			"Call service for management data with superagent",
			"Develop web application with react, redux, redux thunk",
		],
	},
	{
		name: "PANYA5G LINE BOT",
		title: "Design linebot with line messaging api",
		location: "Bangkok,Thailand",
		year: "2020",
		image: Img.imgLinebot,
		category: "software",
		descriptions: [
			"Facilitates the users to display information",
			"Develop line messaging api",
			"line service import data from database (mongodb)",
			"Develop service with node js (express framework)",
			"management message and command",
		],
	},
];
