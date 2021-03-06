import React, { useContext } from 'react';
import { Row, Column } from 'carbon-components-react';
import localeContext from '../../context/localeContext';
// import { Calendar32 } from '@carbon/icons-react';

export default function Program() {
	const locale = useContext(localeContext);

	return (
		<div className="ibm-gtc-program ibm-gtc-page-padding">
			<Row>
				<Column lg={4} xlg={4} md={2} sm={1}>
					<div className="ibm-gtc-program-col1">{locale.program.header}</div>
				</Column>
				<Column>
					<div className="ibm-gtc-program-col2">
						<p>{locale.program.desc}</p>
					</div>
				</Column>
				{/* <Column className="ibm-gtc-program-col3-container" lg={5} xlg={5} md={2} sm={1}>
					<div className="ibm-gtc-program-col3">
						<Calendar32 />
						<div className="ibm-gtc-program-col3-title">{locale.program.prgdates}</div>
						<div className="ibm-gtc-program-col3-dates">{locale.program.dates}</div>
					</div>
				</Column> */}
			</Row>
		</div>
	)
}
