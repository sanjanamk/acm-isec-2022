
import React, { useContext } from "react";
import { Column, Row, Link } from "carbon-components-react";
import localeContext from "../../context/localeContext";
import { LinkedinIcon } from "../imagesHolder";

export default function Panel() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-panel ibm-gtc-page-padding">
			<Row>
				<Column sm={4} md={2} lg={4} xlg={4} max={4}>
					<h1>
						{locale.panel.header}
					</h1>
				</Column>
				<Column>
					<Row>
						{
							locale.panel.profiles.map((profiles, key) => {
								const img = require(`../../assets/panel/${profiles.img}.png`).default || '';
								return (
									<Column key={key} sm={2} md={2} lg={4} xlg={4} max={4}>
										<div className="ibm-gtc-panel-module">
											<img src={img} alt={''}></img>
											<div className="ibm-gtc-panel-user">
												<span>
													{profiles.name}
												</span>
												<Link href={profiles.link} target={"_blank"}>{LinkedinIcon()}</Link>
											</div>
											<div className="ibm-gtc-panel-user-designation">
												{profiles.designation}
											</div>
										</div>
									</Column>
								)
							})
						}
					</Row>
					{/* <Row>
						<h4>About Srinivasan</h4>
						<p>
							{locale.panel.more}
						</p>
					</Row> */}
				</Column>
			</Row>
		</div>
	)
}