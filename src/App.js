import React, { useState, useEffect } from 'react';
//import {connect} from 'react-redux';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';


import Home from './panels/Home';
import ShowAllZayavki from './panels/ShowAllZayavki';
import Client from './panels/Client';
import ClientForm from './panels/ClientForm';
import Master from './panels/Master';
import MasterProfile from './panels/MasterProfile';
import Offers from './panels/Offers';
import Market from './panels/Market';
import MarketChose from './panels/MarketChose';
import KlientWaitCard from './containers/KlientWaitCard.js';
import YouLikeStar from './panels/YouLikeStar';
import Persik from './panels/Persik';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();


	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Client id='client' fetchedUser={fetchedUser} go={go} />
			<KlientWaitCard id='klientwaitcard' fetchedUser={fetchedUser} go={go} />
			<ClientForm id='clientform' fetchedUser={fetchedUser} go={go} />
			<Offers id='offers' fetchedUser={fetchedUser} go={go} />
			<YouLikeStar id='youlikestar' fetchedUser={fetchedUser} go={go} />
			<Master id='master' fetchedUser={fetchedUser} go={go} />
			<MasterProfile id='masterprofile' fetchedUser={fetchedUser} go={go} />
			<Market id='market' fetchedUser={fetchedUser} go={go} />
			<MarketChose id='marketchose' fetchedUser={fetchedUser} go={go} />
			<ShowAllZayavki id='showAllzayavki' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
		</View>
	);
}

export default App;

