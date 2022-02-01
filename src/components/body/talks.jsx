
import React, { useContext } from "react";
import { Column, Row, Link } from "carbon-components-react";
import localeContext from "../../context/localeContext";
import { LinkedinIcon } from "../imagesHolder";

export default function Talks() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-talks ibm-gtc-page-padding">
			<Row>
				<Column lg={4} xlg={4} md={2} sm={1}>
					<h1>
						{locale.talks.header}
					</h1>
				</Column>
				<Column>
						{
							locale.talks.sessions.map((sessions, key) => {
								const img = require(`../../assets/talks/${sessions.speaker.img}.png`).default || '';
								return (
									<Row>
										<Column>
											<div className="ibm-gtc-talks-col2">
												<h3>{sessions.title}</h3>
												<p>{sessions.abstract}</p>
											</div>
										</Column>
										<Column className="ibm-gtc-talks-col3-container" key={key} sm={2} md={2} lg={4} xlg={4} max={4}>
											<div className="ibm-gtc-talks-module">
												<img src={img} alt={''}></img>
												<div className="ibm-gtc-talks-user">
													<span>
														{sessions.speaker.name}
													</span>
													<Link href={sessions.speaker.link} target={"_blank"}>{LinkedinIcon()}</Link>
												</div>
												<div className="ibm-gtc-talks-user-designation">
													{sessions.speaker.designation}
												</div>
											</div>
										</Column>
									</Row>
								)
							})
						}
				</Column>
			</Row>
		</div>
	)
}