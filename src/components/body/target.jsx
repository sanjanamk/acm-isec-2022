import React, { useContext } from 'react';
import { Row, Column } from 'carbon-components-react';
import localeContext from '../../context/localeContext';

export default function Target() {
	const locale = useContext(localeContext);

	return (
		<div className="ibm-gtc-target ibm-gtc-page-padding">
			<Row>
				<Column lg={4} xlg={4} md={2} sm={1}>
					<div className="ibm-gtc-target-col1">{locale.target.header}</div>
				</Column>
				<Column lg={7} xlg={7} md={4} sm={2}>
					<div className="ibm-gtc-target-col2">
						<p>{locale.target.desc}</p>
					</div>
				</Column>
			</Row>
		</div>
	)
}
