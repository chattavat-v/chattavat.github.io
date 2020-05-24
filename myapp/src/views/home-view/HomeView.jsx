import React from "react";
import * as Styles from "./HomeStyle";
import { ImageProfile } from "../../styles/Image";
import { H1, H4, Span, P } from "../../styles/Fonts";
import colors from "../../styles/Colors";

const HomeView = (props) => {
	return (
		<Styles.WrapperHome>
			<Styles.ImageArea>
				<Styles.ImageItem src={ImageProfile} alt={ImageProfile} />
			</Styles.ImageArea>
			<Styles.DescriptionArea>
				<Styles.TopicArea>
					<H4>
						THIS IS <Span style={{ color: colors.sky }}>ME</Span>
					</H4>
					<Styles.Line />
				</Styles.TopicArea>
				<Styles.SubDescription>
					<H1>CHATTAVAT VATTANASIRI</H1>
					<P style={Styles.Position}>Full-Stack Developer</P>
					<Styles.WrapperAbout>
						<Span>
							"Always looking for new idea. exploring in new area and always
							keep my technical skills up to date - working with new people is
							always fun and challenging for me"
						</Span>
					</Styles.WrapperAbout>
				</Styles.SubDescription>
			</Styles.DescriptionArea>
		</Styles.WrapperHome>
	);
};

export default HomeView;
