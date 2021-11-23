import React from 'react';
import { Row, Column, Link } from 'carbon-components-react';
import HeadBand from './headband';
import logo from '../../assets/header/logo.png';
import './header.scss';

export default function Header() {

	return (
		<div className="ibm-gtc-header-container">
			<div className="ibm-gtc-header-nav">
				<Row>
					<Column lg={14} xlg={14} md={6} sm={3}>
						<Link href="/" aria-label="IBM" className="ibm-gtc-header-link">
							IBM<img src={logo} alt="IBM" />
						</Link>
					</Column>
				</Row>
			</div>
			<div className="ibm-gtc-hdr-headbnd-sec">
				<HeadBand />
			</div>
		</div>
	)
}