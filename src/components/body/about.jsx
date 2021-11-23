
import React, { useContext } from "react";
import { Column, Row } from "carbon-components-react";
import localeContext from "../../context/localeContext";

export default function About() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-about ibm-gtc-page-padding">
			<Row>
				<Column sm={4} md={2} lg={4} xlg={4} max={4}>
					<h1>
						{locale.about.header}
					</h1>
				</Column>
				<Column>
					<p>
						{locale.about.desc}
					</p>
				</Column>
			</Row>
		</div>
	)
}