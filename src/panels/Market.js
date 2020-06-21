import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Button, Group, Header, Gradient, SimpleCell, InfoRow, CardScroll, Card, RichCell, Div} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';

import logo from "../img/logo.png";
import KlientWaitCard from "../containers/KlientWaitCard.js";
import './logoheader.css';


const osName = platform();

class Market extends Component {
	constructor(props) {
		super(props);
		this.state = {loading: true, zayavki: null, user:null};
	}


	componentDidMount() {
		console.log(this.props);
		const {id, fetchedUser, go} = this.props;
		fetch('https://redome.simplex48.ru:43210/ReDoMeApi/Request/GetAll')
			.then(response => response.json())
			.then(json => this.setState({loading: false, zayavki: json}))

	}

	async getUserInformation() {
		return await fetch('https://api.vk.com/method/users.get?user_ids=722126&fields=bdate&access_token=1ea712cb1ea712cb1ea712cba21ed5a28411ea71ea712cb404bc85936ab21e0bef8d6e5&v=5.110', {mode: 'no-cors'})
			.then(response => response.json())
			.then(json => this.setState({loading: false, user: json}))
	}



	render() {
		const {loading, zayavki} = this.state;
		const {id, fetchedUser, go} = this.props;
		let user = this.getUserInformation()

		{console.log(user)}
		if (loading) {
			return (
				<Panel id={id}>
					<PanelHeader
						left={<PanelHeaderButton onClick={go} data-to="master">
							{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
						</PanelHeaderButton>}
					><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>
					<Group>
						<Header separator="hide" mode="secondary">loading...</Header>
					</Group>
				</Panel>
			)
		}


		return (
			<Panel id={id}>
				<PanelHeader
					left={<PanelHeaderButton onClick={go} data-to="master">
						{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</PanelHeaderButton>}
				><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>

				<Group>
					<Header separator="hide" mode="secondary">Запросы клиентов</Header>






				</Group>
			</Panel>)
	}
}



Market.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Market;
