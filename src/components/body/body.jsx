import React, { useContext, useRef, useEffect, useState } from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import localeContext from '../../context/localeContext';
import About from "./about";
import Program from "./program";
import Schedule from './schedule';
import Talks from './talks';
import Panel from './panel';
import Target from "./target";
import Topic from "./topic";
import Contact from "./contact";
import Connect from './connect';
import './body.scss';
import './modules.scss';

export default function Body() {
	const locales = useContext(localeContext);
	const refObject = {
		program: useRef(),
		schedule: useRef(),
		talks: useRef(),
		panel: useRef(),
		target: useRef(),
		topic: useRef(),
		contact: useRef()
	}

	const [selectedTab, setSelectedTab] = useState('');

	//handlers
	const scrollToDiv = (ref) => {
		let reference = ref?.reference;
		if (refObject[reference]) {
			setSelectedTab(refObject[reference]);
		}
	}

	//effects
	useEffect(() => {
		if (selectedTab.current?.offsetTop) {
			window.scrollTo(0, selectedTab.current.offsetTop);
		}
	}, [selectedTab]);

	return (
		<div className="ibm-gtc-body">
			<Tabs type="container" className="ibm-gtc-body-tabs ibm-gtc-page-padding">
				{
					locales.tabs.map((tab, key) => {
						return (
							<Tab key={key} id={"tab-" + key} onClick={() => scrollToDiv(tab)} label={
								<div><div>{tab.prefix}</div>{tab.name}</div>
							}></Tab>
						)
					})
				}
			</Tabs>
			<div className="ibm-gtc-about-container">
				<About />
			</div>
			<div className="ibm-gtc-program-container" ref={refObject.program}>
				<Program />
			</div>
			<div className="ibm-gtc-schedule-container" ref={refObject.schedule}>
				<Schedule />
			</div>
			<div className="ibm-gtc-talks-container" ref={refObject.talks}>
				<Talks />
			</div>
			<div className="ibm-gtc-panel-container" ref={refObject.panel}>
				<Panel />
			</div>
			<div className="ibm-gtc-target-container" ref={refObject.target}>
				<Target />
			</div>
			<div className="ibm-gtc-topic-container" ref={refObject.topic}>
				<Topic />
			</div>
			<div className="ibm-gtc-connect-container" ref={refObject.contact}>
				<Connect />
			</div>
			<div className="ibm-gtc-contact-container">
				<Contact />
			</div>
		</div>
	)
}
