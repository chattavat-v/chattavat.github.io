import React from "react";
import ContainerComp from "../../components/container-comp/ContainerComp";
import { H3, P } from "../../styles/Fonts";
import {
	BgActive,
	WrapperContact,
	TopicArea,
	DescriptionArea,
	DetailContact,
	PhoneItem,
	LocationItem,
	EmailItem,
} from "./ContactStyle";
import TopicComp from "../../components/topic-comp/TopicComp";

const ContactView = (props) => {
	return (
		<ContainerComp style={BgActive}>
			<WrapperContact>
				<TopicArea>
					<TopicComp title={"Contacts"} />
					<DescriptionArea>
						<P>"Here me"</P>
					</DescriptionArea>
				</TopicArea>
				<DetailContact>
					<PhoneItem>
						<H3>Phone</H3>
						<P>+(66) 81-094-7156</P>
						<P>Mon to Fri 10am to 8pm</P>
					</PhoneItem>
					<LocationItem>
						<H3>Location</H3>
						<P>Khwaeng Talat Phlu, Khet Thon Buri</P>
						<P>Bangkok, Thailand 10900</P>
					</LocationItem>
					<EmailItem>
						<H3>Email</H3>
						<P>chattavat.psu@gmail.com</P>
						<P>Send us your query anytime!</P>
					</EmailItem>
				</DetailContact>
			</WrapperContact>
		</ContainerComp>
	);
};

export default ContactView;
