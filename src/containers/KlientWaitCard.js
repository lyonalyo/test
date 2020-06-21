import React, {Fragment, Component} from 'react';
import {Group, Header, CardGrid, Card, Avatar, Div, SimpleCell, Button, IOS} from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import logo from "../img/logo.png";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import bridge from "@vkontakte/vk-bridge";


class KlientWaitCard extends Component {
	constructor(props) {
		super(props);
		this.state = {loading: true};
	}

	componentDidMount() {
		console.log(this.props);
		const {id, fetchedUser, go} = this.props;
		const user = bridge.send('VKWebAppGetUserInfo');
		fetch('https://api.vk.com/method/users.get?user_ids=722126&fields=bdate&access_token=1ea712cb1ea712cb1ea712cba21ed5a28411ea71ea712cb404bc85936ab21e0bef8d6e5&v=5.110', {mode: 'no-cors'})
			.then(
			response => response.json())
			.then(json => this.setState({loading: false, person: json}))

	}

	render() {
		const {loading, person} = this.state;
		const {id, fetchedUser, go, data} = this.props;

		if (loading) {
			return (
				<Panel id={id}>
					<PanelHeader
						left={<PanelHeaderButton onClick={go} data-to="home">
							{<Icon28ChevronBack/> }
						</PanelHeaderButton>}
					><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>
					<Group>
						<Header separator="hide" mode="secondary">loading...</Header>
					</Group>
				</Panel>
			)
		}

		return (
			<Group>
				<SimpleCell before={<Avatar size={40} scr ={person.foto_200}
				/>}
							description={data.comment}
							after={<Icon28MessageOutline/>}>{person.first_name} {person.last_name}
				</SimpleCell>
				<CardGrid>
					<Card size="m">
						<div style={{height: 96}}/>
					</Card>
					<Card size="m">
						<div style={{height: 96}}/>
					</Card>
				</CardGrid>
				<Div>
					<Button size="xl" level="2" onClick={go} data-to="marketchose">
						Откликнуться
					</Button>
				</Div>
			</Group>
		)
	}
}

export default KlientWaitCard

